import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutouCreateComponent } from './toutou-create.component';

describe('ToutouCreateComponent', () => {
  let component: ToutouCreateComponent;
  let fixture: ComponentFixture<ToutouCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutouCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutouCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
