import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust'
})
export class CustPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    console.log(value);
    console.log(args);
    let val = value;
    
  //  var result="Mr"+value;
  //  return result;
  }

}