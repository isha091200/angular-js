import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // constructor(private router:Router){}
  // goToProfile(name: string) {
  //   this.router.navigate(['profile'], { queryParams: { name } })
  // }

  users = [
    {
      id: '1',
      name: 'isha',
      age: '24',
      email: 'isha@mailinator.com'
    },
    {
      id: '2',
      name: 'purva',
      age: '26',
      email: 'purva@mailinator.com'
    },
    {
      id: '3',
      name: 'priyal',
      age: '23',
      email: 'priyal@mailinator.com'
    },
    {
      id: '4',
      name: 'shivani',
      age: '28',
      email: 'shivani@mailinator.com'
    },
  ]

  
}
