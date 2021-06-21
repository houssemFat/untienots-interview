import { NgModule } from '@angular/core';
import { IconDefinitionsComponent } from './icon-definitions/icon-definitions.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
    declarations: [IconComponent, IconDefinitionsComponent],
    exports: [IconComponent, IconDefinitionsComponent],
})
export class IconsModule {}
