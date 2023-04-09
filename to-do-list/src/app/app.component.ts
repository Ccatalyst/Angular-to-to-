import { Component } from '@angular/core';

@Component({
  // keyword used to render this component
  selector: 'app-root',
  // template used in conjunction with stylesheet and typescript
  templateUrl: './app.component.html',
  // stylesheets that will apply to this component.
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-list';
}
