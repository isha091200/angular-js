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

  userDetail:any;
  addDetails(val:NgForm){
   console.log(val)
   this.userDetail = val;
  }


  }
