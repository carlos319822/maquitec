import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCertificadoComponent } from './ver-certificado.component';

describe('VerCertificadoComponent', () => {
  let component: VerCertificadoComponent;
  let fixture: ComponentFixture<VerCertificadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCertificadoComponent]
    });
    fixture = TestBed.createComponent(VerCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
