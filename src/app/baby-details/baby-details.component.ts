import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Baby } from '../entities/baby';
import { DataService } from '../data.service';

@Component({
  selector: 'app-baby-details',
  templateUrl: './baby-details.component.html',
  styleUrls: ['./baby-details.component.scss']
})
export class BabyDetailsComponent implements OnInit {
  username: String = this.route.snapshot.params.id;
  baby: Baby;
  
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.baby = this.data.getBaby(this.username);
    console.log(this.baby);
  }

}
