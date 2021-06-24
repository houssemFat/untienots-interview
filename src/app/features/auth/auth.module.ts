import { NgModule } from '@angular/core';
import { AuthRoutingModule } from "@app-features/auth/auth.routing.module";
import { CoreModule } from "@app-core/core.module";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "@app-features/auth/components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IconsModule } from "@app-icons/icons.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, CoreModule, AuthRoutingModule, IconsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})

export class AuthModule {

}
