import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from "@app-features/auth/auth.module";

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => AuthModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
