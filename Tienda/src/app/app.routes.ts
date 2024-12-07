import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

export const routes: Routes = [
{

    path: '',
    component: ListProductComponent

},

{

    path: 'edit',
    component: EditProductComponent

},

{
path: '**', redirectTo: '', pathMatch: 'full'
}

];
