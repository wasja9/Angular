import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TehProcessComponent } from './teh-process.component';

describe('TehProcessComponent', () => {
  let component: TehProcessComponent;
  let fixture: ComponentFixture<TehProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TehProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TehProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
