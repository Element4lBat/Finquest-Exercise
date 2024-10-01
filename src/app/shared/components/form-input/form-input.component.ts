import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { LanguagePipe } from '../../pipes/language.pipe';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, LanguagePipe, ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent {
  @Input() controlName = '';
  @Input() label = '';
  @Input() errorMsg: { label: string; options?: Record<string, any> } = {
    label: '',
  };
  @Input() formGroup!: FormGroup;
}
