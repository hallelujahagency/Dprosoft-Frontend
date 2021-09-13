import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { UserService } from "src/app/core/services/user.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import {  NotificationsService } from 'src/app/core/services/notifications.service';
import { MustMatch } from './ConfirmationPassword';
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

declare var $;

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  constructor(private apiUser: UserService,
              private notificationService: NotificationsService,
              private formBuilder: FormBuilder,
              private modalService: BsModalService,
              private router: Router) { } 

  @ViewChild(DatatableComponent) table: DatatableComponent;


              displayOptionsCollapsed = false;
              modalRef: BsModalRef;
              
              itemsPerPage = 10;
           
              columns = [];
                ColumnMode = ColumnMode;
                messagesData = {
                            emptyMessage: 'Pas de donnees pour le moment',
                            totalMessage: 'total',
                            selectedMessage: 'selected'
                }

  vehicules:any =[];
  apiUrlBackend:string = environment.apiUrl;
  userData:any;
  tempPersonnelle:any;
  services :any =[];
  files:any;
  FormPasswordChange: FormGroup;
  buttonDisabledChangepassword : boolean  = false;
adressPro:any={
  adress:null,
  codePostal:null,
  ville:null
};
adressPers:any={
  adress:null,
  codePostal:null,
  ville:null
};

fieldTextTypeBIC:boolean;
fieldTextTypeIBAN:boolean;
fieldTypeBIC:string = "password" ;
fieldTypeIBAN:string = "password" ;


valueBic:string;
valueIban:string;
valueRib:string;
valueDomicialition:string;

ajoutOrListing:string = "list" ;


FormAddVehicule: FormGroup;
buttonDisabledAddVehicule : boolean  = false;

vehiculeSelectionner:any;


  ngOnInit(): void {
    this.getUserData();
    this.getServices();
    this.getVehicules();

    this.FormPasswordChange = this.formBuilder.group({
            new_pass: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(255) ]] ,
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('new_pass', 'confirmPassword')
        });

    this.FormAddVehicule = this.formBuilder.group({
          immatriculation: ['', [Validators.required ]] ,
          marque: [''] ,
          typeVehicule: [''] ,
          genreVehicule: [''] ,
          carburant: ['', [Validators.required ]] ,
          puisFisc: ['', [Validators.required ]] ,
          tauxCo: ['', [Validators.required ]] ,
          dateMiseEnCirulation: [''] ,
          kmParcouru: ['', [Validators.required ]] ,
      });
  }

  get f() { return this.FormPasswordChange.controls; }

  get add() { return this.FormAddVehicule.controls; }

  getUserData() {
    this.apiUser.getCollaborateur().subscribe(
      data=>{

        
     // console.log(data);
      this.userData = data;
      this.userData.infoDataSup = JSON.parse(this.userData.infoDataSup);

      if(this.userData.infoDataSup.infoBank){

        this.valueDomicialition = this.userData.infoDataSup.infoBank.domiciliation;
        this.valueBic = this.userData.infoDataSup.infoBank.bic;
        this.valueRib = this.userData.infoDataSup.infoBank.rib;
        this.valueIban = this.userData.infoDataSup.infoBank.iban

    }



      if(this.userData.infoDataSup.adressePro){

          this.adressPro = this.userData.infoDataSup.adressePro

      }

      if(this.userData.infoDataSup.adressePers){

        this.adressPers = this.userData.infoDataSup.adressePers

    }

     // console.log(this.adressPers);

      
      this.tempPersonnelle = this.userData;
      }
    )
  }

  OnclickChange(event:string, vehicule:string=null){

    this.ajoutOrListing = event;

    if(event === "modifier"){
          this.apiUser.readVehiculeById({vehicule: vehicule}).subscribe(data =>{
            this.vehiculeSelectionner = data;
            console.log(data)
          })
    }
  }

  getServices() {
    this.apiUser.getServices().subscribe(
      data=>{

        this.services = data;
      }
    )
  }

getVehicules() {
    this.apiUser.getVehiculesByCollaborateur().subscribe(
      data=>{

        this.vehicules = data;
      }
    )
  }

  onFileChange(event:any){

        if(event.target.files && event.target.files[0]){ 
          var filesAmount = event.target.files.length;
          for(let i = 0 ; i< filesAmount; i++){
            var reader = new FileReader();
            reader.onload = (event:any) => {
                  this.files =  event.target.result;
                  this.userData.infoDataSup.profilphoto = event.target.result;
            }
            reader.readAsDataURL(event.target.files[i]);
            
          }
      
        const formData = new FormData();
        formData.append('photo', event.target.files[0], event.target.files[0].name);

        //console.log(formData)


       this.apiUser.uplaodprofilPage(formData).subscribe(data=>{
                console.log(data);

                })
        }
  
    }

onSubmitUserUpdate(){

      let dataSend  = {
        
                    fullname:this.userData.fullname,
                    matricule:this.userData.matricule,
                    service: this.userData.service,
                    fonction: this.userData.infoDataSup.fonction,
                    sexe: this.userData.infoDataSup.sexe,
                    birthday: this.userData.infoDataSup.birthday,
                    statutMatri : this.userData.infoDataSup.statutMatri,
                    // abonCarteFideliteNum: this.userData.infoDataSup.abonCarteFideliteNum,
                    /*roleDp: this.userData.infoDataSup.roleDp,
                    address: this.userData.infoDataSup.address*/
      };

  
      this.apiUser.userUpdate(dataSend).subscribe(data=>{
    
        this.notificationService.showSuccess('Modifié avec succès');

        this.router.navigateByUrl("/tableau-de-bord");
       
      
        }, (error) => {
    
          console.log(error);
         
        });
      }

onSubmitUserUpdateAdress(){

    console.log(this.adressPro);
    console.log(this.adressPers);
        this.apiUser.userUpdateAdresse({adressPro:this.adressPro, adressPers:this.adressPers }).subscribe(data=>{
      
               this.notificationService.showSuccess('Modifié avec succès');
  
          this.router.navigateByUrl("/tableau-de-bord");
         
        
          }, (error) => {
      
            console.log(error);
           
          });
        }

onSubmitChangePassword(){


        this.buttonDisabledChangepassword = true;
        
            if (this.FormPasswordChange.invalid) {
              //this.buttonDisabledChangepassword = false;
              return;
          }
     

    
          this.apiUser.changepassword({newPassword: this.f.new_pass.value}).subscribe(data=>{
          
            this.notificationService.showSuccess('Modifié avec succès');
            this.buttonDisabledChangepassword = false;
            
          
            
            }, (error) => {
              this.buttonDisabledChangepassword = false;
              console.log(error);
            
            });
      }

onSubmitUserEmailContactChange(){


    
        this.apiUser.userUpdateEmailContact({email:this.userData.email,contact:this.userData.contact}).subscribe(data=>{
      
          this.notificationService.showSuccess('Modifié avec succès');
         
        
          }, (error) => {
      
            console.log(error);
           
          });
        }

onSubmitChangePreference(){

let data = {
 gdgd:null
  }


    
          this.apiUser.userUpdatePreferences(data).subscribe(data=>{
        
            this.notificationService.showSuccess('Modifié avec succès');
           
          
            }, (error) => {
        
              console.log(error);
             
            });
          }

onSubmitChangeInfoBank(){

let dataSend ={
  domiciliation:this.valueDomicialition,
  bic:this.valueBic,
  rib: this.valueRib,
  iban:this.valueIban
}
        
              this.apiUser.userUpdateInfoBancaire(dataSend).subscribe(data=>{
              
                this.notificationService.showSuccess('Modifié avec succès');
                this.buttonDisabledChangepassword = false;
                
              
                
                }, (error) => {
                  this.buttonDisabledChangepassword = false;
                  console.log(error);
                
                });
          }

onSubmitAddVehicule(){


            this.buttonDisabledAddVehicule = true;
            
                if (this.FormAddVehicule.invalid) {
                 
                  return;
              }

              let dataSend={

                immatriculation: this.add.immatriculation.value ,
                marque: this.add.marque.value ,
                typeVehicule: this.add.typeVehicule.value ,
                genreVehicule: this.add.genreVehicule.value ,
                carburant: this.add.carburant.value ,
                puisFisc: this.add.puisFisc.value ,
                tauxCo: this.add.tauxCo.value ,
                dateMiseEnCirulation: this.add.dateMiseEnCirulation.value ,
                kmParcouru: this.add.kmParcouru.value
                
              }

             // console.log(dataSend)
         
        
              this.apiUser.addVehiculesByCollaborateur(dataSend).subscribe(data=>{
              
                      this.notificationService.showSuccess('Ajouté avec succès');
                      this.buttonDisabledAddVehicule = false;
                      this.ajoutOrListing = "list";
                      this.vehicules.push(data); 

                }, (error) => {
                  this.buttonDisabledAddVehicule = false;
                  console.log(error);
                
                });
          }

onSubmitupdateVehicule(){



              console.log(this.vehiculeSelectionner);
         
        
              this.apiUser.updateVehiculeById(this.vehiculeSelectionner).subscribe(data=>{
              
                      this.notificationService.showSuccess('Modifié avec succès');

                    let indexNew =  this.vehicules.findIndex(e=> e._id === this.vehiculeSelectionner._id);
                    this.vehicules[indexNew] = this.vehiculeSelectionner;
                      this.ajoutOrListing = "list";

                }, (error) => {
            
                  console.log(error);
                
                });
          }

deleteVehicule(id:string){

  this.apiUser.deleteVehiculeById({vehicule: id}).subscribe(data=>{

    let newData = this.vehicules.filter(e=> e._id !== id);

    this.vehicules = newData;
    this.notificationService.showSuccess("Supprimer avec succès");

  })

 

          }
        

  imageUplaod(){
      $('.file-upload-profil').trigger('click');
   }



     // ngx-bootstrap modal

     openModal(template: TemplateRef<any>) {

      this.modalRef = this.modalService.show(template, {animated: true});
  }


  toggleFieldTextTypeLogin(type:string){

    switch (type) {
      case "IBAN":

        this.fieldTextTypeIBAN = !this.fieldTextTypeIBAN;
        if(this.fieldTypeIBAN == "text"){
            this.fieldTypeIBAN = "password";
        }
        else{ 
           this.fieldTypeIBAN = "text";
        }
        
        break;

      case "BIC":

          this.fieldTextTypeBIC = !this.fieldTextTypeBIC;
          if(this.fieldTypeBIC == "text"){
              this.fieldTypeBIC = "password";
          }
          else{ 
             this.fieldTypeBIC = "text";
          }
          
          break;
    
      default:
        break;
    }
    
   }
}
