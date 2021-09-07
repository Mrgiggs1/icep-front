import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStatistictComponent } from './student-statistict.component';

describe('StudentStatistictComponent', () => {
  let component: StudentStatistictComponent;
  let fixture: ComponentFixture<StudentStatistictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentStatistictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentStatistictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
