import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root-nav-bar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'mfe-navbar-angular-app';
}
