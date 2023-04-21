import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesCardComponent } from './heroes-card.component';

describe('HeroesCardComponent', () => {
  let component: HeroesCardComponent;
  let fixture: ComponentFixture<HeroesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
