import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderCogComponent } from './letter-dash.component';

describe('LoaderCogComponent', () => {
  let component: LoaderCogComponent;
  let fixture: ComponentFixture<LoaderCogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderCogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderCogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
