import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'sections',
		component: SectionsComponent
	},
    { 
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
		imports: [RouterModule.forRoot(routes)],
		exports: [RouterModule]
	})
export class AppRoutingModule { }