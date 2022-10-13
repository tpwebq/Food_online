import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { BasketComponent } from "./basket/basket.component";
import { ComingsoonComponent } from "./comingsoon/comingsoon/comingsoon.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error/error.component";
import { HomeComponent } from './home/home.component';
import { MenuComponent } from "./menu/menu.component";
import { PrivacyComponent } from "./privacy/privacy/privacy.component";

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"comingsoon",
    component: ComingsoonComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "basket",
    component: BasketComponent
  },
  {
    path:"privacy",
    component: PrivacyComponent
  },
  {
    path:"menu",
    component: MenuComponent
  },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
