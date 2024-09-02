import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodaPeComponent } from './roda-pe.component';

describe('RodaPeComponent', () => {
  let component: RodaPeComponent;
  let fixture: ComponentFixture<RodaPeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodaPeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RodaPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
