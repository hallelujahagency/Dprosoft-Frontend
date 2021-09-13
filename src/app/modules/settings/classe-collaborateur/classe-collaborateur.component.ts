import { Component, OnInit,TemplateRef,ViewChild, ElementRef  } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  SettingsService } from 'src/app/core/services/settings.service';

@Component({
  selector: 'app-classe-collaborateur',
  templateUrl: './classe-collaborateur.component.html',
  styleUrls: ['./classe-collaborateur.component.css']
})
export class ClasseCollaborateurComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private apiSettings: SettingsService) { }

  itemsPerPage = 10;
  columns = [
    { prop: '_id', name: 'Id' },
    { prop: 'name', name: 'Name' },
  ];
  messagesData = {
    emptyMessage: 'Pas de donnees pour le moment',
    totalMessage: 'total',
    selectedMessage: 'selected'
};
tempForFilter: any;
classesCollaborateur:any =[];
ColumnMode = ColumnMode;

  ngOnInit(): void {
    this.getDataClassesCollaborateur();
  }



  getDataClassesCollaborateur() {

      this.apiSettings.getCollaborateursClasse()
      .subscribe((data:any)=>{
        this.classesCollaborateur = data ;
        this.tempForFilter = data;

      })
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
    this.classesCollaborateur = temp;
    this.table.offset = 0;
  }

}
