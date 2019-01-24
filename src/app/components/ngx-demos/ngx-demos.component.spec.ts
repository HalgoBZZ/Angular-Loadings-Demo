import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDemosComponent } from './ngx-demos.component';

describe('NgxDemosComponent', () => {
  let component: NgxDemosComponent;
  let fixture: ComponentFixture<NgxDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
