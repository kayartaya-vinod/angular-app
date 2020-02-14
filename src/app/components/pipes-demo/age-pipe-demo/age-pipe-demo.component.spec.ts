import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgePipeDemoComponent } from './age-pipe-demo.component';

describe('AgePipeDemoComponent', () => {
  let component: AgePipeDemoComponent;
  let fixture: ComponentFixture<AgePipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgePipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgePipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
