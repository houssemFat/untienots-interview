import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

import { IconsModule } from '@app-icons/icons.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [IconsModule],
  exports: [FooterComponent],
})
export class SharedModule {
}
