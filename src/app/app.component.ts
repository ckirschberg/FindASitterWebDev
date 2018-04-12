import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  title = 'FindASitter';
  constructor(private authService: AuthService, 
    private usersService: UsersService) {

  }
  
  ngOnInit(): void {
    this.usersService.getSitters().subscribe( (result: any[]) => {
      let myResult = result.filter(x => x.customerId === 3);

      console.log(result);
      console.log(myResult);
    });
  }
  
  
}
