import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// app modules
import { SharedModule } from "@app-shared/shared.module";
import { IconsModule } from "@app-icons/icons.module";
import { MockInterceptor } from "@app-shared/interceptors/mock.intercepter";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    IconsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
