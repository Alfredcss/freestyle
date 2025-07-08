import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFree } from './listar-free';

describe('ListarFree', () => {
  let component: ListarFree;
  let fixture: ComponentFixture<ListarFree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarFree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
