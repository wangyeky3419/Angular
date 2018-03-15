import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveNavComponent } from './save-nav.component';

describe('SaveNavComponent', () => {
  let component: SaveNavComponent;
  let fixture: ComponentFixture<SaveNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
