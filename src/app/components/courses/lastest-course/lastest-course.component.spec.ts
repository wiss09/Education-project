import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestCourseComponent } from './lastest-course.component';

describe('LastestCourseComponent', () => {
  let component: LastestCourseComponent;
  let fixture: ComponentFixture<LastestCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastestCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastestCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
