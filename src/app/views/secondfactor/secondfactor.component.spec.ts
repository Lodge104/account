import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondfactorComponent } from './secondfactor.component';

describe('SecondfactorComponent', () => {
  let component: SecondfactorComponent;
  let fixture: ComponentFixture<SecondfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondfactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
