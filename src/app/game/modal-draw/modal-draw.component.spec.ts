import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDrawComponent } from './modal-draw.component';

describe('ModalDrawComponent', () => {
  let component: ModalDrawComponent;
  let fixture: ComponentFixture<ModalDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
