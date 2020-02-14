import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  // passed from parent component (EventsDemoComponent)
  @Input()
  contact: any = {};

  @Output()
  remove: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    // delete from the array maintained in the parent
    this.remove.emit(this.contact.id);
  }

}
