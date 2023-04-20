import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboxComponent } from './whitebox.component';

describe('WhiteboxComponent', () => {
  let component: WhiteboxComponent;
  let fixture: ComponentFixture<WhiteboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
