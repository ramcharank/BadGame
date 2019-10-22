import { Injectable } from '@angular/core';
import { IPeople } from '../models/people';

@Injectable()
export class PeopleService {
  peoples: IPeople[];
  myName: string;

  constructor() {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {}

  getPeople() {
    return [
      {
        Name: 'Ram',
        Due: 10
      },
      {
        Name: 'Hartej',
        Due: 200
      }
    ];
  }

  getName() {
    return this.myName;
  }
}
