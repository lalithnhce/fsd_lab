import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'login',
		loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
	},
	{
		path: 'home',
		loadComponent: () => import('./movie/movie.component').then((m) => m.MovieComponent),
	},
	{ path: '**', redirectTo: 'home' },
];
