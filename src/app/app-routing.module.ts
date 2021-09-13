import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes  } from '@angular/router';
import { BasicLayoutComponent } from 'src/app/core/layouts/basic-layout/basic-layout.component';
import { ErrorCinqCentPageComponent } from "src/app/shared/error-cinq-cent-page/error-cinq-cent-page.component";
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';

const routes: Routes = [
  {
		path: '',
		redirectTo: 'tableau-de-bord',
		pathMatch: 'full'
	},
	{
		path: 'auth', 
		canActivate: [GuestGuard],
		loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
	},
  {
		path: '',
		canActivate: [AuthGuard],
		component: BasicLayoutComponent,
		//pathMatch: 'full',
    children: [
      		{
				path: 'tableau-de-bord',
				//pathMatch: 'full',
				loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
			
			},
			{
				path: 'missions',
				//pathMatch: 'full',
				loadChildren: () => import('./modules/missions/missions.module').then(m => m.MissionsModule),
			
			},
			{
				path: "user-account",
				//pathMatch: 'prefix',
				loadChildren: () => import('./modules/user-account/user-account.module').then(m => m.UserAccountModule)
			},
			{
				path: 'parametres',
				//pathMatch: 'full',
				loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
			
			},
			{
				path: "requests",
				pathMatch: 'prefix',
				loadChildren: () => import('./modules/requests/requests.module').then(m => m.RequestsModule)
			},

			
    ]
},

// // Handle all other routes
{ path: '**', component: ErrorCinqCentPageComponent }

];

const config: ExtraOptions = {
	useHash: true,
	scrollPositionRestoration: 'top'
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
