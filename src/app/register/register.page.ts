import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  validatorsMessage = {
    name: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'minlength', message: 'Ingrese como mínimo 3 caracteres'}
    ],
    lastName: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'minlength', message: 'Ingrese como mínimo 3 caracteres'}
    ],
    email: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'pattern', message: 'El correo no es válido'}
    ],
    password: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'minlength', message: 'Ingrese como mínimo 5 caracteres'}
    ],
  };

  constructor(private readonly formBuilder: FormBuilder,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.formBuild();
  }

  formBuild(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]]
    }, {validator: this.matchingPassword('password', 'confirmPassword')});
  }

  matchingPassword(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    };
  }


  register(): void{
    console.log('gusrdado');
  }

  goLogin(): void{
    this.router.navigate(['/login']);
  }
}
