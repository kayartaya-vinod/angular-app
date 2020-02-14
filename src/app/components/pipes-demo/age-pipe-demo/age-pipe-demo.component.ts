import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-pipe-demo',
  templateUrl: './age-pipe-demo.component.html',
  styleUrls: ['./age-pipe-demo.component.css']
})
export class AgePipeDemoComponent implements OnInit {

  dob = '1974-01-20';
  
  constructor() { }

  ngOnInit(): void {
  }

}
