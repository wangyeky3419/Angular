import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroExeTwoComponent } from './zorro-exe-two.component';

describe('ZorroExe2Component', () => {
  let component: ZorroExeTwoComponent;
  let fixture: ComponentFixture<ZorroExeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorroExeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroExeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
