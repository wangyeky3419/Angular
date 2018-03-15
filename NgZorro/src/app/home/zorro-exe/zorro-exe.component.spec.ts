import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroExeComponent } from './zorro-exe.component';

describe('ZorroExeComponent', () => {
  let component: ZorroExeComponent;
  let fixture: ComponentFixture<ZorroExeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorroExeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroExeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
