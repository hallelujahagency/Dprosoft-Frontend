import { Component, OnInit,TemplateRef,ViewChild, ElementRef  } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  UserService} from 'src/app/core/services/user.service';
import {  NotificationsService } from 'src/app/core/services/notifications.service';
import {  ServicesEntrepriseService } from 'src/app/core/services/services-entreprise.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 



@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css'],
  providers:[ UserService,NotificationsService,ServicesEntrepriseService]
})
export class CollaborateursComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;

  collaborateurAddForm : FormGroup;
  collaborateurUpdateForm : FormGroup;
  itemsPerPage = 10;
  columns = [
    { prop: 'id', name: 'Id' },
    { prop: 'fullname', name: 'Fullname' },
    { prop: 'fonction', name: 'Fonction' },
    { prop: 'email', name: 'Email' },
    { prop: 'service', name: 'Service' },
    { prop: 'contact', name: 'Contact' }
  ];
  messagesData = {
    emptyMessage: 'Pas de donnees pour le moment',
    totalMessage: 'total',
    selectedMessage: 'selected'
};
modalRef: BsModalRef;

tempForFilter: any;
usersCollaborateur:any;
servicesEntreprises:any;
dataServices: any;
userSelected:any;
serviceId:any;

    ColumnMode = ColumnMode;
  constructor(private usersService: UserService,
              private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private notificationService: NotificationsService,
              private serviceEntreprise : ServicesEntrepriseService,) { }


  ngOnInit(): void {

    this.getCollaborateursEntrepriseAndServices();
    this.getServicesAll();
    this.loadForm();
  }

  get collaborateurAddFormControl() { return this.collaborateurAddForm.controls; }


   // form init

   loadForm(){
    this.collaborateurAddForm = this.formBuilder.group({
      fullname:['', [Validators.required]],
      contact:['', [Validators.required,Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
      fonction:['', [Validators.required]],
      password:['', [Validators.required,Validators.minLength(6)]],
      service:['', [Validators.required]],
		});

    this.collaborateurUpdateForm = this.formBuilder.group({
      fullname:['', [Validators.required]],
      contact:['', [Validators.required,Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
      fonction:['', [Validators.required]],
      service:['', [Validators.required]],
		});

 

  }

  /* collaborateurs */

  getCollaborateursEntreprise(){

    this.usersService.getCollaborateursEntreprise()
                          .subscribe((data:any)=>{
  
                           let newUsers = [];

                           /* new format collaborateur data with service and responsability */
                           data.forEach(element => {

                                  let UserInfo = this.dataServices.find(e=> e.user == element._id);
                                  let userData = element;
                                  userData.responsable = false;
                                  userData.remplacant = false;
                                  userData.service = 'empty';

                                  if(UserInfo){

                                    userData.responsable = UserInfo.responsable;
                                    userData.remplacant = UserInfo.remplacant; 
                                    userData.service = UserInfo.service;
                                  }
                                  newUsers.push(userData);
                             
                           });

                           this.usersCollaborateur = newUsers;
                           this.tempForFilter = newUsers;
                           
                          })
  }

  /* data services with responsability  and user for relation to get user service without new requete*/
  getCollaborateursEntrepriseAndServices(){

    this.usersService.getCollaborateursAndService()
                          .subscribe((data:any)=>{

                            this.dataServices = data;
                            this.getCollaborateursEntreprise();
                            console.log(data);
                          })
  }

  /* all services name */
  getServicesAll(){
    this.serviceEntreprise.getServiceByEntreprise()
                          .subscribe((data)=>{    
  
                            this.servicesEntreprises = data; 
         })
  }

  getServiceName(service:string){

    if(service == 'empty') {
      return "⛔";
  }

  let serviceData =  this.servicesEntreprises.find(e=> e._id == service);
  return serviceData.name
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase().trim();
    const keys = Object.keys(this.tempForFilter[0]);
    const temp = this.tempForFilter.filter(item => {
      for (let i = 0; i < 17; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
   
          return true;
        }
      }
    });
    this.usersCollaborateur = temp;
    this.table.offset = 0;
  }

      // ngx-bootstrap modal

      openModal(template: TemplateRef<any>, id:string = '', action:string ='none') {

        if(id !== ''){
          this.userSelected = this.usersCollaborateur.find(e=> e._id == id);
          this.serviceId = this.userSelected.service;
    
        }
    
        /* reset form */
        if(action == 'add-collaborateur'){
          this.loadForm();
        }
        
        
        this.modalRef = this.modalService.show(template, {animated: true});
    }


    onSubmitAddCollaborateur(){

          if (this.collaborateurAddForm.invalid) {
            return;
          }

          let data = {
            fullname: this.collaborateurAddFormControl.fullname.value ,
            email: this.collaborateurAddFormControl.email.value ,
            contact: this.collaborateurAddFormControl.contact.value ,
            fonction: this.collaborateurAddFormControl.fonction.value ,
            password: this.collaborateurAddFormControl.password.value ,

          };

          this.usersService.addCollaborateursEntreprise(data)
                            .subscribe((data:any)=>{
                              console.log(data.user._id);

                            let newData = {
                              user:data.user._id,
                              service:this.collaborateurAddFormControl.service.value,
                              responsable:false,
                              remplacant:false
                            }  ;
                            this.usersService.addCollaborateurToService(newData)
                                              .subscribe(data=>{

                                                this.getCollaborateursEntrepriseAndServices();
                                                this.notificationService.showSuccess("Ajouter avec success");
                                              })
                            
                                });
                                  this.modalRef.hide();
  
      }

      onSubmitUpdateCollaborateur(){

        if (this.collaborateurUpdateForm.invalid) {
          return;
        }

        /* update service */
        this.onChangeService();
        
        let data = {
          fullname: this.userSelected.fullname ,
          email: this.userSelected.email ,
          contact: this.userSelected.contact ,
          fonction: this.userSelected.fonction,
          user: this.userSelected._id
        };

        this.usersService.updateCollaborateur(data).subscribe(data=>{

          this.getCollaborateursEntrepriseAndServices();
          this.notificationService.showSuccess("Modifier avec success");
        })
      
                                this.modalRef.hide();

    }

      onChangeService() {

        if(this.userSelected.service != this.serviceId){

           
          let newData = {
            user:this.userSelected._id,
            service:this.serviceId,
            responsable:false,
            remplacant:false
          } ;

          this.usersService.addCollaborateurToService(newData)
          .subscribe(data=>{})

        }
                          
            
              
        
        
        }

          // delete item service worflow

  DeleteItem(id:string) {


   let  userTodelete = {user:id} ;
    this.usersService.deleteCollaborateur(userTodelete)
          .subscribe(data =>{
            const newValues =  this.usersCollaborateur.filter(curr => curr._id !== id);
            this.usersCollaborateur = newValues;
            this.notificationService.showSuccess("Supprimer avec success");
       
          })

   }
}
