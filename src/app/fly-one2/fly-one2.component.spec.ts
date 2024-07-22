import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyOne2Component } from './fly-one2.component';

describe('FlyOne2Component', () => {
  let component: FlyOne2Component;
  let fixture: ComponentFixture<FlyOne2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlyOne2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlyOne2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
