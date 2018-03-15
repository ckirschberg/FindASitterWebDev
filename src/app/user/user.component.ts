import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Baby } from '../entities/baby';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() userInput: Baby;
  @Output() userClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onUserClick() {
    // emit event to parent component
    this.userClick.emit(this.userInput);
  }

}
