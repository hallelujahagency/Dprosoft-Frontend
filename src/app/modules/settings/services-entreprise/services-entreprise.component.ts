import { Component, OnInit,TemplateRef,ViewChild, ElementRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import {  ServicesEntrepriseService } from 'src/app/core/services/services-entreprise.service';


import {  UserService,Collaborateur } from 'src/app/core/services/user.service';


import {  NotificationsService } from 'src/app/core/services/notifications.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
declare var $;

@Component({
  selector: 'app-services-entreprise',
  templateUrl: './services-entreprise.component.html',
  styleUrls: ['./services-entreprise.component.css'],
  providers: [ServicesEntrepriseService,NotificationsService,UserService]
})
export class ServicesEntrepriseComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent; 
  @ViewChild('tableListServices', {static: false}) table_list_services: ElementRef;



  serviceForm: FormGroup;
  serviceAddForm : FormGroup;
  itemsPerPage = 10;
  columns = [
    { prop: 'name', name: 'Name' }
  ];
    ColumnMode = ColumnMode;
    displayedColumns = [ 'fullname','email', 'contact'];
    messagesData = {
                emptyMessage: 'Pas de donnees pour le moment',
                totalMessage: 'total',
                selectedMessage: 'selected'
    };
    
  modalRef: BsModalRef;

  tempForFilter: any;
  dataServices: any;
  serviceSelected:any;
  responsableId:string ;
  collaborateurs:Collaborateur[];


  constructor(private serviceEntreprise : ServicesEntrepriseService,
              private notificationService: NotificationsService,
              private usersService: UserService,
              private modalService: BsModalService,
              private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.loadForm();
    this.getServicesAll();
    this.getCollaborateursEntreprise();
  }


getServicesAll(){
  this.serviceEntreprise.getServiceByEntreprise()
                        .subscribe((data)=>{    

                          this.dataServices = data;
                          this.tempForFilter = data;
       })
}

getServiceResponsable(id:string){
 
    let service = this.dataServices.find(e=> e._id == id );

    if(service.serviceusers.length ==0){
        return "⛔";
    }

   
    let userResponsable = service.serviceusers.find(e=> e.responsable == true);

    if(!userResponsable){
      return "⛔";
    }
   

    
    let userData = service.usersdata.find( e=> e._id == userResponsable.user);
    return userData.fullname;

}

getServiceResponsableID(id:string){
 
  let service = this.dataServices.find(e=> e._id == id );

  if(service.serviceusers.length == 0){
      return 'empty';
  }

  let userResponsable = service.serviceusers.find(e=> e.responsable == true);

  if(!userResponsable){
    return "empty";
  }
  return userResponsable.user;

}

updateFilter(event) {
  const val = event.target.value.toLowerCase().trim();
  const count = this.columns.length;
  const keys = Object.keys(this.tempForFilter[0]);
  const temp = this.tempForFilter.filter(item => {
    for (let i = 0; i < 3; i++) {
      if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
        return true;
      }
    }
  });
  this.dataServices = temp;
  this.table.offset = 0;
}

onSubmitAddService() {

  if (this.serviceAddForm.invalid) {
    return;
  }

this.serviceEntreprise.AddService(this.serviceAddFormControl.service.value)
                        .subscribe(data=>{

                                      this.getServicesAll();
                                      this.notificationService.showSuccess("Ajouter avec success");
                                });
                                  this.modalRef.hide();


}

onChangeOrAddResponsable() {


this.serviceEntreprise.UpdateResponsableServiceEntreprise(this.serviceSelected._id, this.responsableId)
                      .subscribe(data=>{});


}

getCollaborateursEntreprise(){

  this.usersService.getCollaborateursEntreprise()
                        .subscribe(data=>{

                          this.collaborateurs = data;
                        })
}

onSubmitUpdateService() {

  /* update responsable */
  this.onChangeOrAddResponsable();

  /* modification name service */
this.serviceEntreprise.UpdateServiceEntreprise(this.serviceSelected._id, this.serviceSelected.name)
                        .subscribe(data=>{

                                      this.getServicesAll();
                                      this.notificationService.showSuccess("Modifier avec success");
                                });
                               

  this.modalRef.hide();


}



  get serviceAddFormControl() { return this.serviceAddForm.controls; }
   // form init

   loadForm(){
    this.serviceForm = this.formBuilder.group({
			responsable: ['', [Validators.required]],
      service: ['', [Validators.required, Validators.minLength(3)]]
		});

    this.serviceAddForm = this.formBuilder.group({
      service: ['', [Validators.required, Validators.minLength(3)]]
		});
  }




     // ngx-bootstrap modal

  openModal(template: TemplateRef<any>, id:string = '', action:string ='none') {

    if(id !== ''){

     this.serviceSelected = this.dataServices.find(e=> e._id == id);
     this.responsableId = this.getServiceResponsableID(id);

    }

    /* reset form */
    if(action == 'add-service'){
      this.loadForm();
    }
    
    
    this.modalRef = this.modalService.show(template, {animated: true});
}


    

 


      // delete item service worflow

  DeleteItem(id:string) {


    this.serviceEntreprise.DeleteServiceEntreprise(id)
          .subscribe(data =>{
            const newValues =  this.dataServices.filter(curr => curr._id !== id);
            this.dataServices = newValues;
            this.notificationService.showSuccess("Supprimer avec success");
           
          })

   }

     downloadPDF() {
      
      var divContents = $("#table-list-services").html();
      let printWindow = window.open('', '', 'height=400,width=800');
      printWindow.document.write('<html><head><title>DIV Contents</title>');
      printWindow.document.write('</head><body >');
      printWindow.document.write(divContents);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
    

}
