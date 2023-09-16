import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionVacanteComponent } from './postulacion-vacante.component';

describe('PostulacionVacanteComponent', () => {
  let component: PostulacionVacanteComponent;
  let fixture: ComponentFixture<PostulacionVacanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostulacionVacanteComponent]
    });
    fixture = TestBed.createComponent(PostulacionVacanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
