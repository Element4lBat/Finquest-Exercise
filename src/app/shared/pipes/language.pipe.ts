import { Pipe, PipeTransform } from '@angular/core';

import { DICTIONARY } from '../../constants/language.constants';

@Pipe({
  name: 'language',
  standalone: true,
})
export class LanguagePipe implements PipeTransform {
  transform(value: string, args?: Record<string, any>): string {
    let result = DICTIONARY[value] || value;

    if (args) {
      Object.keys(args).forEach(
        (key: string) => (result = result.replace(`{{${key}}}`, args[key]))
      );
    }

    return result;
  }
}
