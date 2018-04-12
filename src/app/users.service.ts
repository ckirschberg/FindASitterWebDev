import { Injectable } from "@angular/core";
import { UsersState } from "./store/store";
import { Sitter } from "./entities/sitter";

@Injectable()
export class UsersService {
  static getInitialUsersState() : UsersState {
    return { isBaby: undefined, babies: [], sitters: [
      // test data
      {
      username: 'test', firstname:'Lars', lastname: 'Petersen', birthDate: new Date(2000, 1,1), area: '', gender: 'MALE', rate: 195, workAreas: [], rating: []
    } as Sitter]};
  }
}