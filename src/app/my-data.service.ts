import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MyDataService {

  private data = new Subject<string>();
  data$ = this.data.asObservable();

  setData(value: string) {
    this.data.next(value);
  }
}
