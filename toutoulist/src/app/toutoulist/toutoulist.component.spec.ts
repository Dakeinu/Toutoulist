import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutoulistComponent } from './toutoulist.component';

describe('ToutoulistComponent', () => {
  let component: ToutoulistComponent;
  let fixture: ComponentFixture<ToutoulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutoulistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutoulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
