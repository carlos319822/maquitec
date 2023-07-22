import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    seudonimo:'',
    contrasena:''
  }

  form: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router,){
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  
  
  Ingresar(){
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'carvajal' && password == 'carvajal'){
      //Redirecciona,os al dashboard
      this.fakeLoading();
    }else {
      //Mostramos un mensaje de error
      this.error();
      this.form.reset();
    }
  }
  error() {
    this._snackBar.open('Usuario o Contraseña Incorrecta', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }

}
