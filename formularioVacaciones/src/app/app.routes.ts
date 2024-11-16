import { Routes } from '@angular/router';
import { MainFormComponent } from './components/main-form/main-form.component';
import { LogintestComponent } from './components/logintest/logintest.component';

export const routes: Routes = [
    {

        path: 'home',
        component: MainFormComponent
    
    },
    {
        path: 'login',
        component: LogintestComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];
