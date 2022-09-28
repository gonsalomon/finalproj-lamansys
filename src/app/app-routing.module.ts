import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch:'prefix'},
  {path: 'projects', component: WrapperComponent, pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
