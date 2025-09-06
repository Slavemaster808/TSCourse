import { Routes } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: '', component: ShoppingListComponent },
  { path: '**', redirectTo: '' }
];