import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoComunesComponent } from './no-comunes.component';

describe('NoComunesComponent', () => {
  let component: NoComunesComponent;
  let fixture: ComponentFixture<NoComunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoComunesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoComunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
