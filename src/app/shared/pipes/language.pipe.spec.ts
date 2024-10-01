import { DICTIONARY } from '../../constants/language.constants';
import { LanguagePipe } from './language.pipe';

describe('LanguagePipe', () => {
  it('create an instance', () => {
    const pipe = new LanguagePipe();
    expect(pipe).toBeTruthy();
  });

  it('should translate a given key to corresponding dictionary entry', () => {
    const pipe = new LanguagePipe();
    expect(pipe.transform('PROJECT_TITLE')).toBe(DICTIONARY['PROJECT_TITLE']);
  });

  it('should translate a given key and interpolate dynamic option', () => {
    const pipe = new LanguagePipe();
    expect(pipe.transform('INPUT_NAME_ERROR', { max: 5 })).toBe(
      DICTIONARY['INPUT_NAME_ERROR'].replace('{{max}}', '5')
    );
  });
});
