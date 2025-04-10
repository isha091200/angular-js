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

    users:User[]=[];
    selectedUser:User|undefined;
    constructor(private userService:UsersService){

    }

    ngOnInit(){
      this.getUser();
    }

    getUser(){
      this.userService.getUsers().subscribe((data:User[])=>{
        this.users = data
        console.log(data);

      })
    }
    addUser(user:User){

      if(!this.selectedUser){
        console.log(user)
        this.userService.saveUsers(user).subscribe((data:User)=>{
          console.log(data);
  
          if(data){
            this.getUser();
          }
          
        })
      }else{
        const userData = {...user,id:this.selectedUser.id}
        this.userService.updateUser(userData).subscribe((data)=>{
          if(data){
            console.log(data);
            this.getUser();
          }
        })
        
      }
      // console.log(user)
      // this.userService.saveUsers(user).subscribe((data:User)=>{
      //   console.log(data);

      //   if(data){
      //     this.getUser();
      //   }
        
      // })

    }

    deleteUser(id:string){
      console.log(id);
      this.userService.deleteUser(id).subscribe((data:User)=>{
        console.log(data);
        if(data){
          this.getUser();
        }

      })
      
    }

    selectUser(id:string){
      console.log(id);
      this.userService.getSelectedUser(id).subscribe((data:User)=>{
        console.log(data);
        this.selectedUser = data
      })
    }

  }
