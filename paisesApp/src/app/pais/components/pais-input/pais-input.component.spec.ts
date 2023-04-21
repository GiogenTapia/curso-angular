import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisInputComponent } from './pais-input.component';

describe('PaisInputComponent', () => {
  let component: PaisInputComponent;
  let fixture: ComponentFixture<PaisInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
