import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callback',
  pure: false
})
export class CallbackPipe implements PipeTransform {

  transform(values: any[], callback: (item: any) => boolean): any {
    if (!values || !callback) {
      return values;
    }
    return values.filter(item => callback(item));
  }

}
