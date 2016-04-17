import { Pipe } from 'angular2/core';



@Pipe({
  name: 'pinTruncate'
})
export class PinTruncatePipe {
  transform(input:string, amount:number):string {
    if(input.length > amount) {
      return input.substring(0, amount) + '...';
    } else {
      return input;
    }
  }
}