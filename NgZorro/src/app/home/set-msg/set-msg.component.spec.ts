import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMsgComponent } from './set-msg.component';

describe('SetMsgComponent', () => {
  let component: SetMsgComponent;
  let fixture: ComponentFixture<SetMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
