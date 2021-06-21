import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  /**
   * Fill color
   * A fill svg color format
   * Use this to change the svg color
   */
  @Input()
  fillColor = 'red';
  /**
   * Size as number used to make svg width and height
   */
  @Input()
  size = 24;

  @Input() viewbox = '0 0 24 24';

  /**
   * Scale the icon
   */
  @Input()
  scaleRatio = '1';

  // Display the icon
  @Input() id: string = '';
}
