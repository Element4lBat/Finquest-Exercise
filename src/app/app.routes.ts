import { Routes } from '@angular/router';

import {
  ProductCreationComponent,
} from './private/product-creation/product-creation.component';

export const routes: Routes = [
  {
    path: 'product-list',
    component: ProductCreationComponent,
  },
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full',
  },
];
