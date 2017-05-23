import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MyServiceService {

  private persons: any[] = [
    {
      id: 1,
      firstName: 'Michał',
      lastName: 'Hoffmann',
      dept: 'BOS',
      createDate: new Date('2017-05-17T05:22:22')
    },
    {
      id: 2,
      firstName: 'Alicja',
      lastName: 'Miernicka',
      dept: 'BOS',
      createDate: new Date('2017-01-17T12:42:22')
    },
    {
      id: 3,
      firstName: 'Tomasz',
      lastName: 'Pszczółka',
      dept: 'ZARZĄD',
      createDate: new Date('2013-01-17T12:42:22')
    }
  ];

  constructor(private http: Http) {
  }

  data(): any[] {
    return this.persons;
  }

}
