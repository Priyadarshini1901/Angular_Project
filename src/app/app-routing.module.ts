import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:HomepageComponent
  },
  {
    path:'Login',
    component: LoginPageComponent 
  },
  {
    path:'Products',
    component: ProductsComponent  
  },
  {
    path:'About',
    component:AboutusComponent 
  },
  {
    path:'Contact',
    component: ContactUsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomepageComponent,LoginPageComponent,ProductsComponent,AboutusComponent,ContactUsComponent]
