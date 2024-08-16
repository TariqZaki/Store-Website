import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path: '',redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'home'},
    {path: 'products', component: ProductsComponent, title: 'products'},
    {path: 'contact', component: ContactComponent, title: 'contact'},
    {path: '**', component: PagenotfoundComponent, title: 'page not found'},
    
];
