import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFree } from './agregar-free';

describe('AgregarFree', () => {
  let component: AgregarFree;
  let fixture: ComponentFixture<AgregarFree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarFree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarFree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
