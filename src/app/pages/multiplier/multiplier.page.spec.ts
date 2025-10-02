import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplierPage } from './multiplier.page';

describe('MultiplierPage', () => {
  let component: MultiplierPage;
  let fixture: ComponentFixture<MultiplierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
