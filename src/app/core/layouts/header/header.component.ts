import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  NotificationsService } from 'src/app/core/services/notifications.service';
import { UserService } from "src/app/core/services/user.service";
import { first } from 'rxjs/operators';
import { environment } from "src/environments/environment";
declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService,UserService, NotificationsService]
})
export class HeaderComponent implements OnInit {

  apiUrlBackend:string = environment.apiUrl;
  userData :any;
  services:any;
  modalRef: BsModalRef;
  besoinForm: FormGroup;
  isFormSubmitted = false;

  constructor(private authenticationService: AuthenticationService,
              private modalService: BsModalService,
              private apiUser:UserService,
              private formBuilder: FormBuilder,
              private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.getUserData();
    this.getServices();
    this.loadForm();
  }

  loadForm() {
		this.besoinForm = this.formBuilder.group({
			title: ['', [Validators.required]],
			service: ['', [Validators.required]],
     // destination: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ratingville: ['', [Validators.required]],
      geographique: ['', [Validators.required]],

		});
	}

  get besoinControl() { return this.besoinForm.controls; }

  getUserData(){

   
      this.apiUser.getCollaborateur().subscribe(
        (data)=>{
        //  console.log(data)
        this.userData = data;
        this.userData.infoDataSup = JSON.parse(this.userData.infoDataSup);
        
        }
      )
  }

  getServices(){

    this.apiUser.getServices().subscribe(
      data=>{
        this.services = data;
      }
    )
   }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template,{animated: true});
  }

  onLogout(){

    this.authenticationService.logout(true);
  }

  onSubmit() {
		this.isFormSubmitted = true; 
		if (this.besoinForm.invalid) {
			return;
		}

   

    let data = {
      title: this.besoinControl.title.value,
      description: this.besoinControl.description.value,
      service:this.besoinControl.service.value,
      lat: $(".lat-value").val(),
      lng: $(".lng-value").val(),
      destination: $(".addres-value").val(),
      geographique: this.besoinControl.geographique.value,
      ratingville: this.besoinControl.ratingville.value,
    }
    console.log(data);

	this.apiUser.addBesoin(data)
			.pipe(first())
			.subscribe(
				data => {
          this.loadForm();
          $(".mapgoogle-autocomplete-custom").val("");
          this.notificationService.showSuccess('Besoin creer avec succes...');
          this.modalService.hide();
				
				});
	}


    // get location 

    
    findLocation(event:any): void {

    this.apiUser.getLocation(event.target.value);

    }

}
