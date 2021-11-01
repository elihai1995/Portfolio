import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeExperienceComponent } from './life-experience.component';

describe('LifeExperienceComponent', () => {
  let component: LifeExperienceComponent;
  let fixture: ComponentFixture<LifeExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
