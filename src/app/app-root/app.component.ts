import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
        error: err => console.log('err:', err)
      })
  }

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
