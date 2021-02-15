import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterwindowComponent } from './registerwindow.component';

describe('RegisterwindowComponent', () => {
  let component: RegisterwindowComponent;
  let fixture: ComponentFixture<RegisterwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterwindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
