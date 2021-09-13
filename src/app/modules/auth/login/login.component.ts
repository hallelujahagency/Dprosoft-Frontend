import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  NotificationsService } from 'src/app/core/services/notifications.service';
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NotificationsService, AuthenticationService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
	isFormSubmitted = false;
	fieldTextType:boolean=false;
	fieldType:string = "password";

  constructor( private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
		});
	}
 
  get userControl() { return this.loginForm.controls; }

  onSubmit() {
		this.isFormSubmitted = true;
		if (this.loginForm.invalid) {
			return;
		}

		this.authenticationService.login(this.userControl.email.value, this.userControl.password.value)
			.pipe(first())
			.subscribe(
				data => {
					//this.router.navigate(['dashboard']);
          this.notificationService.showSuccess('Connexion reussie redirection en cours...');
					setTimeout(() => {
						window.location.reload();
					  }, 1000);
				});
	}

	toggleFieldTextTypeLogin(){

		this.fieldTextType = !this.fieldTextType;
        if(this.fieldType == "text"){
            this.fieldType = "password";
        }
        else{ 
           this.fieldType = "text";
        }
		
		
	   }

}
