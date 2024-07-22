import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlyComponent } from './add-fly.component';

describe('AddFlyComponent', () => {
  let component: AddFlyComponent;
  let fixture: ComponentFixture<AddFlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
