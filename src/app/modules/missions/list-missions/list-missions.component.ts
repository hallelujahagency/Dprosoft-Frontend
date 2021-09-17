import { Component,TemplateRef, OnInit, ViewChild  } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  NotificationsService } from 'src/app/core/services/notifications.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "src/app/core/services/user.service";

// import {} from 'google.maps';

declare var $;

@Component({
  selector: 'app-list-missions',
  templateUrl: './list-missions.component.html', 
  styleUrls: ['./list-missions.component.css'],
  providers:[NotificationsService, UserService]
})
export class ListMissionsComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  modalRef: BsModalRef;
  formMission:FormGroup;
  formJustif:FormGroup;
  itemsPerPage = 10;
  columns = [
    { prop: '_id', name: 'Id' },
    { prop: 'title', name: 'Title' },
    { prop: 'description', name: 'Description' },
    { prop: 'status', name: 'Status' }
  ];
    ColumnMode = ColumnMode;
    messagesData = {
                emptyMessage: 'Pas de donnees pour le moment',
                totalMessage: 'total',
                selectedMessage: 'selected'
    }

  
    listOfMissions :any;
    tempFilterData:any;
    itemSelected:any;

  collaborateurService = [];
  selectedColaborateurs = [];
  disabled = false;
  isFormJustif:boolean = false;
  isFormSubmitted:boolean = false;
  departValue:string;
  suggestions:any;

  ifResponsable:any;

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private apiUser:UserService,
              private notificationService: NotificationsService,) { }

  ngOnInit(): void {
    this.getListMissions();
    this.loadForm();

    this.ifResponsable = localStorage.getItem("if_responsable");

    //console.log(localStorage.getItem("if_responsable"));
   
  }

/* get list of missions */

  getListMissions(){


                        this.apiUser.getBesoins().subscribe((data:any)=>{
                          this.listOfMissions = data ;
                          this.tempFilterData = data;

                        });

                        this.apiUser.getCollaborateursServices().subscribe((data:any)=>{
                          this.collaborateurService = data;
                         // console.log(data)

                        });
  }

/* load form */

loadForm(){
  this.formMission = this.formBuilder.group({

    //destination: ['', [Validators.required]],
    participants: ['', [Validators.required]],
    start: ['', [Validators.required]],
   // ratingville: ['', [Validators.required]],
    vehiculeService:[''],
   // geographique: ['', [Validators.required]],
   /* lat:  ['', [Validators.required]],
    lng: ['', [Validators.required]],*/
    end: ['', [Validators.required]],
  });

  this.formJustif = this.formBuilder.group({

    justification: ['', [Validators.required]]
  });

}


get formMissionControl() { return this.formMission.controls; }


get formJustifControl() { return this.formJustif.controls; }

  

   /*- Traitement mission */

   onSubmit(){

    this.isFormSubmitted = !this.isFormSubmitted;

        if (this.formMission.invalid) {
          this.isFormSubmitted = !this.isFormSubmitted;
          return;
        }

      

        let newData = {
          besoin: this.itemSelected._id,
          start: this.formMissionControl.start.value,
          end: this.formMissionControl.end.value,
          vehiculeService:this.formMissionControl.vehiculeService.value,
          service:this.itemSelected.service,
          participants:this.formMissionControl.participants.value,
        }

        //console.log(newData);


     this.apiUser.TraitementBesoin(newData)
                            .subscribe((data:any)=>{
                      
                                  this.isFormSubmitted = !this.isFormSubmitted;
                                  this.notificationService.showSuccess("Traiter avec success");
                                  this.getListMissions();
                                  this.modalRef.hide();
                            })

      }

    /* not go to mission */

    refusedMission()
    {

      this.isFormJustif = !this.isFormJustif;

      if (this.formJustif.invalid) {
        this.isFormJustif = !this.isFormJustif;
        return;
      }

      let newData = {
        besoin: this.itemSelected._id,
        justification: this.formJustifControl.justification.value
      }

      this.apiUser.refusedBesoin(newData)
                          .subscribe((data:any)=>{
                          // this.getListMissions();
                                this.isFormJustif = !this.isFormJustif;
                                this.notificationService.showSuccess("Traiter avec success");
                                this.getListMissions();
                                this.modalRef.hide();
                          })
 

    }

    /* filter */

      updateFilter(event:any) {
        const val = event.target.value.toLowerCase().trim();
        const count = this.columns.length;
        const keys = Object.keys( this.tempFilterData[0]);
        const temp =  this.tempFilterData.filter(item => {
          for (let i = 0; i < count; i++) {
            if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
              return true;
            }
          }
        });
        this.listOfMissions = temp;
        this.table.offset = 0;
      }


      // ngx-bootstrap modal

      openModal(template: TemplateRef<any>, id:string = '') {

          if(id !== ''){
            this.itemSelected = this.listOfMissions.find(e=> e._id == id);
          }

          this.modalRef = this.modalService.show(template, {animated: true});
      }



/* destination */
getDestinationName(configData:any){

  return JSON.parse(configData).address

}



     
}
