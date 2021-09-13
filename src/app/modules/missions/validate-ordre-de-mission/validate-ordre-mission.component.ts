import { Component,TemplateRef, OnInit, ViewChild  } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  NotificationsService } from 'src/app/core/services/notifications.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "src/app/core/services/user.service";

declare var $;

@Component({
  selector: 'app-validate-ordre-mission',
  templateUrl: './validate-ordre-mission.component.html',
  providers:[NotificationsService, UserService]
})
export class ValidateOrdreMissionComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  modalRef: BsModalRef;
  formRequestMission:FormGroup;
  formRequestMissionRefused:FormGroup;
  itemsPerPage = 10;
  columns = [
    { prop: '_id', name: 'Id' },
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
    missionDetails:any;
    requestSelectedConfig:any;

    isFormSubmitted:boolean = false;
    isFormJustif:boolean = false;
    departValue:any;


    constructor(private modalService: BsModalService,
                private formBuilder: FormBuilder,
                private apiUser:UserService,
                private notificationService: NotificationsService,) { }



  ngOnInit(): void {
    this.loadForm();
    this.getListOfRequestsMissions();
  }

//validate order mission

  validateMission(id:string){

    this.apiUser.validateOrderMission({ordermission:id}).subscribe((data)=>{
      this.notificationService.showSuccess("Validée avec success");
      setTimeout(() => {
        window.location.reload();
        }, 100);
    })
  }

  /* load form */

    loadForm(){
      this.formRequestMission = this.formBuilder.group({

        depart: ['', [Validators.required]],
      });

      this.formRequestMissionRefused = this.formBuilder.group({

        justification: ['', [Validators.required]]
      });

    }


get formRequestMissionControl() { return this.formRequestMission.controls; }


get formJustifControl() { return this.formRequestMissionRefused.controls; }

    /* get list of requests mission */

      getListOfRequestsMissions(){


        this.apiUser.getOrdreMissionsForValidate().subscribe((data:any)=>{
          this.listOfMissions = data ;
          this.tempFilterData = data;

        });

    }


     /*- Validate request mission */

   onSubmit(){

    this.isFormSubmitted = !this.isFormSubmitted;

        if (this.formRequestMission.invalid) {
          this.isFormSubmitted = !this.isFormSubmitted;
          return;
        }

        let newData = {
          request: this.itemSelected._id,
          lat: $(".lat-value").val(),
          lng: $(".lng-value").val(),
         // destination: $(".addres-value").val(),
          depart: $(".addres-value").val(),
        }

        this.apiUser.validateRequestMission(newData)
                            .subscribe((data:any)=>{
                            // this.getListMissions();
                                  this.isFormSubmitted = !this.isFormSubmitted;
                                  this.notificationService.showSuccess("Validée avec success");
                                  this.getListOfRequestsMissions();
                                  this.modalRef.hide();
                            })

      }

      /* not go to mission */

    refusedMission()
    {

      this.isFormJustif = !this.isFormJustif;

      if (this.formRequestMissionRefused.invalid) {
        this.isFormJustif = !this.isFormJustif;
        return;
      }

      let newData = {
        besoin: this.itemSelected._id,
        justification: this.formJustifControl.justification.value,
      }

      this.apiUser.refusedBesoin(newData)
                          .subscribe((data:any)=>{
                          // this.getListMissions();
                                this.isFormJustif = !this.isFormJustif;
                                this.notificationService.showSuccess("Refusée avec success");
                                this.getListOfRequestsMissions();
                                this.modalRef.hide();
                          })


    }

    /* filter */

    updateFilter(event) {
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


        /* get besoin data */

        besoinDataDetails(besoin:any){

          let besoinId = JSON.parse(besoin).besoinId;
      
            let newData= {
              besoin:besoinId
            }
      
            this.apiUser.getBesoinSingle(newData)
                        .subscribe((data:any)=>{
                          this.missionDetails = data;
                          })
          }

         // ngx-bootstrap modal

      openModal(template: TemplateRef<any>, id:string = '', action:string = '') {

          if(id !== ''){
            this.itemSelected = this.listOfMissions.find(e=> e._id == id);
            //console.log(this.itemSelected.configData);

            this.requestSelectedConfig = JSON.parse(this.itemSelected.prevision);
            console.log(this.requestSelectedConfig);
          }


          this.modalRef = this.modalService.show(template, {animated: true});
      }

  //get address

  getAdressParseJSon(data:any){

    let name = JSON.parse(data);

   return  name.address;

  }

  totalprevision(){

    let total = this.itemSelected.prevision.hebergement + this.itemSelected.prevision.restauration + this.itemSelected.prevision.transport + this.itemSelected.prevision.fraisMission;

   return  total;

  }

}
