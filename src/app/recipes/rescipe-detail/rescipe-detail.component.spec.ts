import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescipeDetailComponent } from './rescipe-detail.component';

describe('RescipeDetailComponent', () => {
  let component: RescipeDetailComponent;
  let fixture: ComponentFixture<RescipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescipeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
