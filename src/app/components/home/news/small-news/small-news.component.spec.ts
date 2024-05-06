import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNewsComponent } from './small-news.component';

describe('SmallNewsComponent', () => {
  let component: SmallNewsComponent;
  let fixture: ComponentFixture<SmallNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
