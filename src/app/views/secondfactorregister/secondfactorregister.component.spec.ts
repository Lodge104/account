import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondfactorregisterComponent } from './secondfactorregister.component';

describe('SecondfactorregisterComponent', () => {
  let component: SecondfactorregisterComponent;
  let fixture: ComponentFixture<SecondfactorregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondfactorregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondfactorregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
