import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfilComponent } from './pages/edit-profil/edit-profil.component';
import { ProfilComponent } from './pages/profil/profil.component';
/*import { OrdreMissionTemplateComponent } from './ordre-mission-template/ordre-mission-template.component';
import { WorflowConfigureComponent } from './worflow-configure/worflow-configure.component';
import { ServicesEntrepriseComponent } from './services-entreprise/services-entreprise.component';
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component';*/


const routes: Routes = [
	{
		path: '', 
		children: [
			{ path: '', redirectTo: 'modifier-informations', pathMatch: 'full' },
			
			{
				path: 'modifier-informations',
				component: EditProfilComponent
			}, 
			
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class  UserAccountRoutingModule { }
