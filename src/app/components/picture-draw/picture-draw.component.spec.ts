import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureDrawComponent } from './picture-draw.component';

describe('PictureDrawComponent', () => {
  let component: PictureDrawComponent;
  let fixture: ComponentFixture<PictureDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PictureDrawComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PictureDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
