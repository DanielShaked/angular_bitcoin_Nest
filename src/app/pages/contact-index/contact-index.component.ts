import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'contact-index',
  templateUrl: './contact-index.component.html',
  styleUrl: './contact-index.component.scss'
})
export class ContactIndexComponent implements OnInit {
  constructor(private contactService: ContactService) { }

  contacts$!: Observable<Contact[]>

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$

  }

  onRemoveContact(contactId: string) {
    console.log('contactId', contactId)
    this.contactService.deleteContact(contactId)
      .pipe(take(1))
      .subscribe({
        error: err => console.log('err', err)
      })
  }


}
