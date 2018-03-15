import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutesReportComponent } from './institutes-report.component';

describe('InstitutesReportComponent', () => {
  let component: InstitutesReportComponent;
  let fixture: ComponentFixture<InstitutesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
