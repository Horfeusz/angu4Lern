import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from 'util';
import * as moment from "moment";

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: any, format?: any): any {
    const result = moment(value).parseZone();
    if (isNullOrUndefined(format)) {
      return result.format('YYYY-MM-DD HH:mm:ss');
    }
    return result.format(format);
  }
}
