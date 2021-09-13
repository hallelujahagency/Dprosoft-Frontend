import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
	{
		path: '', 
		children: [
			{ path: '', redirectTo: 'se-connecter', pathMatch: 'full' },
			
			{
				path: 'se-connecter',
				component: LoginComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class AuthRoutingModule { }
