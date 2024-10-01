import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonComponent } from '@shared/components/form-button/form-button.component';
import { LanguagePipe } from '@shared/pipes/language.pipe';

import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductItemComponent,
        CommonModule,
        LanguagePipe,
        FormButtonComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.productItem = {
      name: 'Test Product',
      price: 123,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
