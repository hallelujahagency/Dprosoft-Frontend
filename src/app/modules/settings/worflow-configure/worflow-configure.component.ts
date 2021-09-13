import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import {  WorflowService } from 'src/app/core/services/worflow.service';
import {  ServicesEntrepriseService } from 'src/app/core/services/services-entreprise.service';
import {  NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'app-worflow-configure',
  templateUrl: './worflow-configure.component.html',
  styleUrls: ['./worflow-configure.component.css'],
  providers: [WorflowService,ServicesEntrepriseService, NotificationsService]
})
export class WorflowConfigureComponent implements OnInit {

 
modalRef: BsModalRef;
selectedId :string;
worflowForm: FormGroup;
action:string;

worflowServicesOrdreDeMission :any;
worflowServiceTemp:any;
servicesEntreprises: any; 
worflow_item_update:any;


  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private WorflowService: WorflowService,
              private serviceEntreprise : ServicesEntrepriseService,
              private notificationService: NotificationsService) { }


  ngOnInit(): void {

    this.loadForm();

    this.getWorflowData();
    this.getServicesAll();
  }


getWorflowData(){
  this.WorflowService.getWorflowServiceAndResponsable()
                      .subscribe((data:any)=>{  
                        this.worflowServicesOrdreDeMission = data;
                      })
}

/* if reposnable get or return no responsable */
getServiceResponsable(user:any){
 
  if(user == 'empty'){
      return "⛔";
  }

  return user.fullname;


}

 //add service worflow item

 onSubmitAddWorkflow() {
  if (this.worflowForm.invalid) {
    return;
  }

  /* set position of item */

  let postionData = 1;

  if(this.worflowServicesOrdreDeMission.length){

    let positionArray =[];
    for (let index = 0; index < this.worflowServicesOrdreDeMission.length; index++) {
      positionArray[index] = this.worflowServicesOrdreDeMission[index].position;
      
    }
   postionData = this.arrayMax(positionArray) + 1;

  }



   const data = {
     service:this.worflowFormControl.service.value,
     description: this.worflowFormControl.description.value,
     position: postionData, 
     color_icon: this.worflowFormControl.color_set.value,
     service_color: this.worflowFormControl.color_set.value

   }


  this.WorflowService.addServiceToWorflow(data)
                      .subscribe(data=>{
                        this.getWorflowData();
                        this.notificationService.showSuccess("Ajouter avec success");
                        this.modalRef.hide();

                      });

   
   
   
  
}


/* all servivces entreprise */
getServicesAll(){
  this.serviceEntreprise.getServiceByEntreprise()
                        .subscribe((data)=>{    

                          this.servicesEntreprises = data;
       })
}

  // event drag and drog

  dropped(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  
  this.worflowServiceTemp = event.container.data;

  }

 // change position service worflow

 savePosition(){
  for (let index = 0; index < this.worflowServiceTemp.length; index++) {
    this.worflowServiceTemp[index].position = index;   
    this.WorflowService.updatePositionServiceToWorflow({worflowServiceId: this.worflowServiceTemp[index]._id, position: index})
    .subscribe(data=>{});
  }

  
  this.worflowServicesOrdreDeMission = this.worflowServiceTemp;
  this.modalRef.hide();
  this.notificationService.showSuccess("Modifier avec success");
}






  get worflowFormControl() { return this.worflowForm.controls; }

 
  // form init

  loadForm(){
    this.worflowForm = this.formBuilder.group({

			service: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      color_set: ['', [Validators.required]],
		});


  }



  // update item service worflow

  UpdateClickItem() {

    if (this.worflowForm.invalid) {
      return;
    }
  

     const data = {
       service:this.worflow_item_update.service,
       description: this.worflow_item_update.description, 
       color_icon: this.worflow_item_update.color_icon,
       service_color: this.worflow_item_update.color_icon,
       worflowServiceId:this.worflow_item_update._id
  
     }
this.WorflowService.updateServiceToWorflow(data)
                    .subscribe(data=>{
                      
                      
                     let index = this.worflowServicesOrdreDeMission.findIndex(e=> e._id == this.worflow_item_update._id);
                     this.worflowServicesOrdreDeMission[index] = this.worflow_item_update;

                      this.notificationService.showSuccess("Modifier avec success");
                      this.modalRef.hide();
                    })


    }

  // delete item service worflow

  DeleteItem() {


   let dataDelete = {worflowServiceId: this.selectedId}
    this.WorflowService.DeleteServiceToWorflow(dataDelete)
                        .subscribe(value=>{

                          const newData = this.worflowServicesOrdreDeMission.filter(curr => curr._id !== this.selectedId) ;
                          this.worflowServicesOrdreDeMission = newData;
                          this.notificationService.showSuccess("Supprimer avec success");
                          this.modalRef.hide();

                        })
    

   }
 
  // ngx-bootstrap modal

  openModal(template: TemplateRef<any>, id:string = 'empty',action:string = 'none') {

      if(this.modalRef) this.modalRef.hide();
      this.action = action;
      if( this.action == 'create') {
        this.loadForm();
      }

      if(id !== 'empty'){

          this.selectedId = id;
         this.worflow_item_update =  this.worflowServicesOrdreDeMission.find(curr => curr._id === this.selectedId);
          
      }


      this.modalRef = this.modalService.show(template, {animated: true});
  }
 
  //get max value in array 

  arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  };




}
