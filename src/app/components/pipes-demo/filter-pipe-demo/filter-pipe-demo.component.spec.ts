import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipeDemoComponent } from './filter-pipe-demo.component';

describe('FilterPipeDemoComponent', () => {
  let component: FilterPipeDemoComponent;
  let fixture: ComponentFixture<FilterPipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
