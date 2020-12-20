import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwRpojComponent } from './viw-rpoj.component';

describe('ViwRpojComponent', () => {
  let component: ViwRpojComponent;
  let fixture: ComponentFixture<ViwRpojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViwRpojComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViwRpojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
