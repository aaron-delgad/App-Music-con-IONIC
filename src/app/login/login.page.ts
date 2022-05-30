import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  errorMessage: string;

  validatorsMessage= {
    email: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'pattern', message: 'El correo no es válido'}
    ],
    password: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'minlength', message: 'Ingrese como mínimo 5 caracteres'}
    ]
  };

  constructor(private readonly builder: FormBuilder,
              private readonly authentificationService: AuthentificationService,
              private readonly router: Router,
              private readonly storage: Storage) { }

  ngOnInit() {
    this.formBuild();
    this.storage.create();
  }

  formBuild(): void{
    this.form = this.builder.group({
      email: ['radees.24.16@gmail.com', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)]],
      password: ['12345', [Validators.required, Validators.minLength(5)]]
    });
  }

  loginUser(): void{
    this.authentificationService.loginUser(this.form.value).then(resp => {
      this.errorMessage = '';
      this.storage.set('isUserLoggeIn', true);
      this.router.navigate(['/menu/home']);
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
