import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() user:string='';
  @Input() city:string='';
  @Output() getUsers = new EventEmitter();

  users = ['Isha', 'Priyal', 'Riddhi', 'Purva', 'Shivani'];

  ngOnInit() {
    this.getUsers.emit(this.users);
  }
  loadData() {
    this.getUsers.emit(this.users);
  }

}
