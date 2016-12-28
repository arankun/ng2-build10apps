

import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home.component";
import {AboutComponent} from "./pages/about.component";
import {ContactComponent} from "./pages/contact.component";
import {ModuleWithProviders} from "@angular/core";
const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
]

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
