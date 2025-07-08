import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFree } from './eliminar-free';

describe('EliminarFree', () => {
  let component: EliminarFree;
  let fixture: ComponentFixture<EliminarFree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarFree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarFree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
