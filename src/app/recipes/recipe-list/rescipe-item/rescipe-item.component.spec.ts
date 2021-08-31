import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescipeItemComponent } from './rescipe-item.component';

describe('RescipeItemComponent', () => {
  let component: RescipeItemComponent;
  let fixture: ComponentFixture<RescipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescipeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
