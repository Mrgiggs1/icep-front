import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffStatisticsComponent } from './staff-statistics.component';

describe('StaffStatisticsComponent', () => {
  let component: StaffStatisticsComponent;
  let fixture: ComponentFixture<StaffStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
