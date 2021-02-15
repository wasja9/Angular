import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrnTreeComponent } from './brn-tree.component';

describe('BrnTreeComponent', () => {
  let component: BrnTreeComponent;
  let fixture: ComponentFixture<BrnTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrnTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrnTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
