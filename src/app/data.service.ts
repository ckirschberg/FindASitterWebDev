import { Injectable } from '@angular/core';
import { Baby } from './entities/baby';
import { Sitter } from './entities/sitter';

@Injectable()
export class DataService {

  // Call to a web service to get data.
  // Add dummy data until we can do that.
  babies: Baby[] = [
    {
      username: 'oli',
      firstname: 'Oliver', 
      lastname: 'Kirschberg', 
      birthDate: new Date(2017,5,17), 
      area: 'Greater Copenhagen', 
      rating: [] 
    },
    {
      username: 'elin',
      firstname: 'Elin', 
      lastname: 'Skuladottir', 
      birthDate: new Date(2012,8,18), 
      area: 'Greater Copenhagen', 
      rating: [] 
    },
  ];

  sitters: Sitter[] = [
    {
      username: 'death-metal',
      firstname: 'Christian', 
      lastname: 'Kirschberg', 
      birthDate: new Date(1979,1,1), 
      area: 'Greater Copenhagen', 
      rating: [],
      gender: 'Male',
      rate: 70,
      workAreas: ['Greater Copenhagen','Sealand'] 
    }
  ];

  constructor() { }

  public addBaby(baby: Baby) {
    this.babies.push(baby);

    console.log(this.babies);
  }
  public addSitter(sitter: Sitter) {
    this.sitters.push(sitter);
  }

  public getBaby(username: String): Baby {
    return this.babies.find(x => x.username === username);
    //for (int i=0; i < this.babies.)
  }


}
