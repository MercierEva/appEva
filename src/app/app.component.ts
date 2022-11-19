import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-eva';
  filters : string;

  searchThis(event: Event) {
    this.filters = (event.target as HTMLInputElement).value;
  }
}
