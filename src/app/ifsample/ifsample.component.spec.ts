import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfsampleComponent } from './ifsample.component';

describe('IfsampleComponent', () => {
  let component: IfsampleComponent;
  let fixture: ComponentFixture<IfsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfsampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
