import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillInstitutesComponent } from './drill-institutes.component';

describe('DrillInstitutesComponent', () => {
  let component: DrillInstitutesComponent;
  let fixture: ComponentFixture<DrillInstitutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillInstitutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
