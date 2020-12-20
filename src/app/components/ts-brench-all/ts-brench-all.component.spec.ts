import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsBrenchAllComponent } from './ts-brench-all.component';

describe('TsBrenchAllComponent', () => {
  let component: TsBrenchAllComponent;
  let fixture: ComponentFixture<TsBrenchAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsBrenchAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsBrenchAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
