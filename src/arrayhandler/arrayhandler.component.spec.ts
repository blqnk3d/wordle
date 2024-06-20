import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayhandlerComponent } from './arrayhandler.component';

describe('ArrayhandlerComponent', () => {
  let component: ArrayhandlerComponent;
  let fixture: ComponentFixture<ArrayhandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayhandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayhandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
