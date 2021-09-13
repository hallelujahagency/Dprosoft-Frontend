import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMissionsComponent } from './list-missions/list-missions.component';
import { OrdresDeMissionComponent } from './ordres-de-mission/ordres-de-mission.component';
import { RequestsMissionComponent } from './requests-mission/requests-mission.component';
import { ValidateOrdreMissionComponent } from "./validate-ordre-de-mission/validate-ordre-mission.component";


const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', redirectTo: 'ordres-de-mission', pathMatch: 'full' },
			
			{
				path: 'ordres-de-mission',
				component: OrdresDeMissionComponent
			}, 
			{
				path: 'liste-des-besoins',
				component: ListMissionsComponent 
			}, 

			{
				path: 'liste-des-requetes',
				component: RequestsMissionComponent 
			},

			{
				path: 'validate-ordres-de-mission',
				component: ValidateOrdreMissionComponent 
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class MissionsRoutingModule { }
