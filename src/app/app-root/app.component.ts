import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  navOptions = [
    {
      value: 'home', label: 'Home'
    },
    {
      value: 'contacts', label: 'Contacts'
    },
    {
      value: 'about', label: 'About'
    }
  ]

  displayContent = this.navOptions[0]

  onChangeDisplay(selectedDisplay: any) {
    this.displayContent = selectedDisplay
  }
}
