import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogSpinComponent } from './cog-spin.component';

describe('CogSpinComponent', () => {
  let component: CogSpinComponent;
  let fixture: ComponentFixture<CogSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CogSpinComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CogSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
