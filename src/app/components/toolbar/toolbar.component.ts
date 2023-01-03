import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sph-loader-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  darkMode = false;
  @HostBinding('class') className = '';

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    const darkClassName = 'darkMode';
    this.className = this.darkMode ? darkClassName : '';
  }

}
