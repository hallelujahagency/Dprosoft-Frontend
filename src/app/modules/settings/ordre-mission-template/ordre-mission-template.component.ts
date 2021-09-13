import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {  OrdreDeMissionService  } from "src/app/core/services/ordre-de-mission.service";
import { OrdreDeMissionTemplate } from "src/app/core/models/ordre-de-mission-template";
import { NotificationsService } from "src/app/core/services/notifications.service";
declare var $;

@Component({
  selector: 'app-ordre-mission-template',
  templateUrl: './ordre-mission-template.component.html',
  styleUrls: ['./ordre-mission-template.component.css'],
  providers: [OrdreDeMissionService, NotificationsService]
})
export class OrdreMissionTemplateComponent implements OnInit {



   templateData:OrdreDeMissionTemplate;
 
  constructor(private sanitized: DomSanitizer,
              private ordreDeMissionService: OrdreDeMissionService,
              private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.loadScript();
    this.getTemplate();
    
  }

  loadScript() {
    const url="assets/js/tinymce.min.js"
     let node = document.createElement('script');
     node.src = url;
     node.type = 'text/javascript';
     node.async = true;
     node.classList.add('script-manager-ordre-mission');
     document.getElementsByTagName('head')[0].appendChild(node); 
 }

 removeScript() {
  const existingScriptElement = document.head.querySelector(`script.script-manager-ordre-mission`);
      if (existingScriptElement) {
      document.head.removeChild(existingScriptElement);
    }
 }

 safeHtml(modelHtml) {
  return this.sanitized.bypassSecurityTrustHtml(modelHtml);
 }


 getTemplate() {
  
this.ordreDeMissionService.getTemplateOrdreDeMision().subscribe((data:any)=>{
    this.templateData = data.template;
  })
  
 }


  saveEmailtemplate() {

   let htmlElement = $('#ordre-mission-modele');    
   let dataToString = htmlElement.prop('outerHTML');

   this.ordreDeMissionService.updateTemplateOrdreDeMision(this.templateData._id, dataToString)
   .subscribe(data =>{
      this.templateData.template = dataToString;
      this.notificationService.showSuccess("Modifier avec succes");

   })

	}



  ngOnDestroy(): void {
    this.removeScript();
  }
 
}
