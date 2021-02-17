import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApilearningComponent } from './apilearning.component';

describe('ApilearningComponent', () => {
  let component: ApilearningComponent;
  let fixture: ComponentFixture<ApilearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApilearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApilearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
