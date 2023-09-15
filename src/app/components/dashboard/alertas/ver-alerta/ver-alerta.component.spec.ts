import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAlertaComponent } from './ver-alerta.component';

describe('VerAlertaComponent', () => {
  let component: VerAlertaComponent;
  let fixture: ComponentFixture<VerAlertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerAlertaComponent]
    });
    fixture = TestBed.createComponent(VerAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
