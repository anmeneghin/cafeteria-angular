import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesComponent } from './cafes.component';

describe('CafesComponent', () => {
  let component: CafesComponent;
  let fixture: ComponentFixture<CafesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
