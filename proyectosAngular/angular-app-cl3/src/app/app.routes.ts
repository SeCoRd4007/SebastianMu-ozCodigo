import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

export const routes: Routes = [
    {
        path:'',
        component: MyTestComponentComponent
    },
    {
        path:'Auth',
        component: MyTestComponentComponent
    },
    {
        path:'servicios',
        component: ServiciosComponent
    },
    {
        path:'sidebar',
        component: SidebarComponent
    }
];
