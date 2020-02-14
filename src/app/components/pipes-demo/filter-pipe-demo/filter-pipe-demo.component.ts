import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter-pipe-demo',
  templateUrl: './filter-pipe-demo.component.html',
  styleUrls: ['./filter-pipe-demo.component.css']
})
export class FilterPipeDemoComponent implements OnInit {

  searchTerm: string;
  contacts: any = [];

  constructor(private hc: HttpClient) { }

  ngOnInit(): void {
    this.hc.get('/assets/contacts.json')
      .subscribe(data => this.contacts = data)
  }

}
