import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForsampleComponent } from './forsample.component';

describe('ForsampleComponent', () => {
  let component: ForsampleComponent;
  let fixture: ComponentFixture<ForsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForsampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
