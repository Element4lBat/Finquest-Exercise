import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { LanguagePipe } from '../../pipes/language.pipe';

@Component({
  selector: 'app-form-button',
  standalone: true,
  imports: [LanguagePipe],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormButtonComponent {
  @Input() label = '';
  @Input() type = 'button';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();
}
