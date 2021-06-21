import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from "@app-core/core.module";
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [CoreModule, CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers : []
})
export class AuthRoutingModule {
}
