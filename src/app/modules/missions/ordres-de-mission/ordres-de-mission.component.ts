import { Component, OnInit, ViewChild  } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import {Router} from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as fileSaver from 'file-saver';
import {  NotificationsService } from 'src/app/core/services/notifications.service';
import { FileService } from 'src/app/core/services/file.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: 'app-ordres-de-mission',
  templateUrl: './ordres-de-mission.component.html',
  styleUrls: ['./ordres-de-mission.component.css'],
  providers:[NotificationsService, UserService, FileService]
})
export class OrdresDeMissionComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;


  displayOptionsCollapsed = false;
  
  itemsPerPage = 10;
  columns = [];
    ColumnMode = ColumnMode;
    messagesData = {
                emptyMessage: 'Pas de donnees pour le moment',
                totalMessage: 'total',
                selectedMessage: 'selected'
    }

    missions :any;
    temp :any;
  constructor(
              private modalService: BsModalService,
              private formBuilder: FormBuilder,
              private apiUser:UserService,
              private notificationService: NotificationsService,
              private fileService: FileService) { }

  ngOnInit(): void {
    this.getListMissions();
  }

  /* get list of missions */

  getListMissions(){


    this.apiUser.getOrdreMissions().subscribe((data:any)=>{
      this.missions = data ;
      this.temp = data;
      //console.log(this.missions);

    });

}

/* user current can validate */
getUserWhoValidateName(configData:any){

  return JSON.parse(configData).userCurrentValidate.fullname

}

  updateFilter(event) {
    const val = event.target.value.toLowerCase().trim();
    const count = this.columns.length;
    const keys = Object.keys(this.temp[0]);
    const temp = this.temp.filter(item => {
      for (let i = 0; i < count; i++) {
        if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
          return true;
        }
      }
    });
    this.missions = temp;
    this.table.offset = 0;
  }

  RemoveData(formation: number)
{

 /*  const items = this.missions.filter(curr => curr.id !== formation);
  this.missions = items;  */

}

  getOrderMission(id:string){

    this.apiUser.getOrderMissionFileName({missionOrder: id}).subscribe((data)=>{

          this.fileService.downloadFileDoc(data.filename).subscribe((response: any) => { 
            //when you use stricter type checking
            let blob:any = new Blob([response], { type: 'application/pdf; charset=utf-8' });
            const url = window.URL.createObjectURL(blob);
            fileSaver.saveAs(blob, 'ordre-de-mission.pdf');
          //}), error => console.log('Error downloading the file'),
          }), (error: any) => console.log('Error downloading the file'), //when you use stricter type checking
                      () => console.info('File downloaded successfully');
        })

    
  }





}
