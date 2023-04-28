import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraNombreComponent } from './muestra-nombre.component';

describe('MuestraNombreComponent', () => {
  let component: MuestraNombreComponent;
  let fixture: ComponentFixture<MuestraNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestraNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuestraNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
