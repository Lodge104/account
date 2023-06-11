import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveProfileComponent } from './progressive-profile.component';

describe('ProgressiveProfileComponent', () => {
  let component: ProgressiveProfileComponent;
  let fixture: ComponentFixture<ProgressiveProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressiveProfileComponent]
    });
    fixture = TestBed.createComponent(ProgressiveProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
