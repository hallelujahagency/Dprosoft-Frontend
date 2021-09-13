import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdreMissionTemplateComponent } from './ordre-mission-template/ordre-mission-template.component';
import { WorflowConfigureComponent } from './worflow-configure/worflow-configure.component';
import { ServicesEntrepriseComponent } from './services-entreprise/services-entreprise.component';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';


const routes: Routes = [
	{
		path: '', 
		children: [
			{ path: '', redirectTo: 'template-ordre-de-mission', pathMatch: 'full' },
			
			{
				path: 'template-ordre-de-mission',
				component: OrdreMissionTemplateComponent
			}, 
			{
				path: 'configuration-du-worflow-ordre-de-mission',
				component: WorflowConfigureComponent
			}, 
			{
				path: 'liste-des-services',
				component: ServicesEntrepriseComponent
			}, 
			{
				path: 'liste-des-collaborateurs',
				component: CollaborateursComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class SettingsRoutingModule { }
