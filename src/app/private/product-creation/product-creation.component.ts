import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';

import { FormButtonComponent } from '@shared/components/form-button/form-button.component';
import { FormInputComponent } from '@shared/components/form-input/form-input.component';
import { LanguagePipe } from '@shared/pipes/language.pipe';

import { ProductItemComponent } from './product-item/product-item.component';
import { IProductItem } from './product-item/product-item.model';

@Component({
  selector: 'app-product-creation',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ProductItemComponent,
    LanguagePipe,
    FormInputComponent,
    FormButtonComponent,
  ],
  templateUrl: './product-creation.component.html',
  styleUrl: './product-creation.component.scss',
})
export class ProductCreationComponent implements OnInit, OnDestroy {
  private hasReset = false;
  private productChangesSubscription!: Subscription;

  productFormGroup!: FormGroup;
  submitMessage: {
    display: boolean;
    state: 'success' | 'error';
    message: string;
  } = {
    display: false,
    state: 'error',
    message: '',
  };
  productList: IProductItem[] = [];

  formInputs = [
    {
      controlName: 'name',
      label: 'INPUT_NAME_LABEL',
      errorMsg: 'INPUT_NAME_ERROR',
    },
    {
      controlName: 'description',
      label: 'INPUT_DESCRIPTION_LABEL',
      errorMsg: '',
    },
    {
      controlName: 'price',
      label: 'INPUT_PRICE_LABEL',
      errorMsg: 'INPUT_PRICE_ERROR',
    },
  ];

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initProductFormGroup();
  }

  private initProductFormGroup() {
    this.productFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.maxLength(100)],
      price: [
        '',
        [Validators.required, Validators.pattern(/^[1-9]\d{0,9}(\.\d{1,2})?$/)],
      ],
    });
    this.productChangesSubscription =
      this.productFormGroup.valueChanges.subscribe(() => {
        if (this.hasReset) {
          this.hasReset = false;
          return;
        }
        this.submitMessage.display = false;
      });
  }

  onSubmit(): void {
    this.submitMessage.display = true;
    this.submitMessage.state = this.productFormGroup.valid
      ? 'success'
      : 'error';
    this.submitMessage.message = this.productFormGroup.valid
      ? 'PRODUCT_SUBMISSION_SUCCESS'
      : 'PRODUCT_SUBMISSION_ERROR';
    this.productList.push({
      name: this.productFormGroup.get('name')?.value,
      description: this.productFormGroup.get('description')?.value,
      price: this.productFormGroup.get('price')?.value,
    });
    this.hasReset = true;
    this.productFormGroup.reset();
  }

  ngOnDestroy(): void {
    this.productChangesSubscription?.unsubscribe();
  }
}
