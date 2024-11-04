import { Routes } from '@angular/router';
import { CrouselComponent } from './crousel/crousel.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
{
     path:"",
     component:CrouselComponent
},
{
    path:"About",
    component:AboutComponent
},
{
    path:"Contact",
    component:ContactComponent
},
{
    path:"products",
    component:ProductsComponent
}


 
];

