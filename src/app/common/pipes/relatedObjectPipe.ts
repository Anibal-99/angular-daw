import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'repr'
})
export class ReprPipe implements PipeTransform {

  transform(value: any): any {
    const isObject = typeof value == 'object';
    const isArray = Object.prototype.toString.call(value) === '[object Array]';


    if (isObject && isArray) {
        return value.reduce((accum: string, value: any) => accum + ", " + value?.nombre, "").slice(1);
    }

    if (isObject) {
        return value?.nombre
    }

    return value;
  }

}