import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarpersonaComponent } from './publicarpersona.component';

describe('PublicarpersonaComponent', () => {
  let component: PublicarpersonaComponent;
  let fixture: ComponentFixture<PublicarpersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicarpersonaComponent]
    });
    fixture = TestBed.createComponent(PublicarpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
