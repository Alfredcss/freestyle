import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Freestyle } from './freestyle';

describe('Freestyle', () => {
  let component: Freestyle;
  let fixture: ComponentFixture<Freestyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Freestyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Freestyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
