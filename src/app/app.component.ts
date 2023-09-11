import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fish Master';
  subTitle = "A Fish Keepers Guide";

  toggleAdd() {
    console.log("hello world");
  }
}
