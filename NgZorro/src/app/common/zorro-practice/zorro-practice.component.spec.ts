import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroPracticeComponent } from './zorro-practice.component';

describe('ZorroPracticeComponent', () => {
  let component: ZorroPracticeComponent;
  let fixture: ComponentFixture<ZorroPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorroPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
