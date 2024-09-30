import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormButtonComponent } from '@shared/components/form-button/form-button.component';
import { LanguagePipe } from '@shared/pipes/language.pipe';

import { IProductItem } from './product-item.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, LanguagePipe, FormButtonComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() productItem!: IProductItem;
  displayDescription = false;
}
