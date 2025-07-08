import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFree } from './editar-free';

describe('EditarFree', () => {
  let component: EditarFree;
  let fixture: ComponentFixture<EditarFree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarFree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
