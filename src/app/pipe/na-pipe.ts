import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'na',
})
export class NaPipe implements PipeTransform {
  transform(value: any): unknown {
    if(value!==null && value !== undefined && value !== '') {
          return value;
    }
    else{
      return 'NA';
    }
  }
}
