import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadalComponent } from './badal.component';

describe('BadalComponent', () => {
  let component: BadalComponent;
  let fixture: ComponentFixture<BadalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
