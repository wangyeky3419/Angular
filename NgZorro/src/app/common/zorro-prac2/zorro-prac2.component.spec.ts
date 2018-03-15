import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroPrac2Component } from './zorro-prac2.component';

describe('ZorroPrac2Component', () => {
  let component: ZorroPrac2Component;
  let fixture: ComponentFixture<ZorroPrac2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorroPrac2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroPrac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
