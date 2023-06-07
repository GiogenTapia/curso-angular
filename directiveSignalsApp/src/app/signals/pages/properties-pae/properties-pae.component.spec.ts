import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPaeComponent } from './properties-pae.component';

describe('PropertiesPaeComponent', () => {
  let component: PropertiesPaeComponent;
  let fixture: ComponentFixture<PropertiesPaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesPaeComponent]
    });
    fixture = TestBed.createComponent(PropertiesPaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
