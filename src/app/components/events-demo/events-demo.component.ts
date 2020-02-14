import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events-demo',
  templateUrl: './events-demo.component.html',
  styleUrls: ['./events-demo.component.css']
})
export class EventsDemoComponent implements OnInit {


  contacts: any = [];

  constructor(private hc: HttpClient) { }

  ngOnInit(): void {
    this.hc.get('/assets/contacts.json')
      .subscribe(data => this.contacts = data)
  }

  removeContact(id) {
    let index = this.contacts.findIndex(c => c.id === id);
    this.contacts.splice(index, 1);
  }


}
