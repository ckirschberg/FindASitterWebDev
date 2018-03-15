import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Baby } from '../entities/baby';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  private babies: Baby[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.babies = this.data.babies;
  }
  onUserClicked(baby) {
    console.log(baby);
  }
}
