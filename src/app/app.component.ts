  import { afterNextRender, afterRender, Component, effect, signal, ViewChild } from '@angular/core';
  import { RouterLink, RouterOutlet } from '@angular/router';
  import { LoginComponent } from './login/login.component';
  import { SignupComponent } from './signup/signup.component';
  import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
  import { HeaderComponent } from './header/header.component';
  import { HomeComponent } from './home/home.component';
  import { NgIf } from '@angular/common';
  import { UserComponent } from './user/user.component';
  import { CurrencyConvertorPipe } from './pipe/currency-convertor.pipe';
  import { ProductService } from './service/product.service';
import { UsersService } from './service/users.service';
import { User } from './interfaces/User';

  @Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink,LoginComponent, SignupComponent, HeaderComponent,HomeComponent, ReactiveFormsModule, NgIf, FormsModule, UserComponent, CurrencyConvertorPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {

   profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  onSubmit(){
    console.log(this.profileForm.value);
  }

  get name() {
    return this.profileForm.get('name');
  }
  
  get email() {
    return this.profileForm.get('email');
  }
  
  get password() {
    return this.profileForm.get('password');
  }
  setValue(){
    this.profileForm.setValue({
      name: 'purva',
      email: 'purva@mailinator.com',
      password: 'Brain@2029'
    });
  }


  }
