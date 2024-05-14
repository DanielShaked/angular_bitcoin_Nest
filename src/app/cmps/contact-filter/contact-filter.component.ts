import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FilterBy } from '../../models/contact.model';
import { debounceTime, distinctUntilChanged, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrl: './contact-filter.component.scss'
})
export class ContactFilterComponent implements OnInit, OnDestroy {


  constructor(private contactService: ContactService) { }
  private filterSubject$ = new Subject()
  private destroySubject$ = new Subject()
  filterBy!: FilterBy

  ngOnInit(): void {
    this.contactService.filterBy$
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(filterBy => {
        this.filterBy = filterBy
      })

    this.filterSubject$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.destroySubject$)
      ).subscribe(() => {
        console.log('this.filterBy', this.filterBy)
        this.contactService.setFilter(this.filterBy)
      })
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(null)
    this.destroySubject$.complete()
  }

  onSetFilter(term: string) {
    console.log('changed');

    this.filterSubject$.next(term)
  }
}
