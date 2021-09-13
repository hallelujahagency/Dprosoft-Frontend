import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardFullComponent } from './pages/dashboard-full/dashboard-full.component';


const routes: Routes = [
	{
		path: '',
		children: [
			
			{
				path: '',
				component: DashboardFullComponent
			}, 
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class DashboardRoutingModule { }
