import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { HomePageComponent } from './modules/home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'Auth',
        component: AuthComponent
    },
    {
        path:'sidebar',
        component: SidebarComponent
    }
];
