import { Pipe, PipeTransform } from '@angular/core';
import { BabyBook } from '../models/book';

@Pipe({
  name: 'filter'
})
export class BookFilterPipe implements PipeTransform {
  transform(items: BabyBook[], searchText: string): BabyBook[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.author.toLowerCase().includes(searchText) || it.title.toLowerCase().includes(searchText);
    });
  }
}
