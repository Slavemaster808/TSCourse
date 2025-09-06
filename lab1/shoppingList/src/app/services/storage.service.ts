import { Injectable } from '@angular/core';
import { ProductItem } from '../interfaces/product-item.interface';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private readonly STORAGE_KEY = 'shopping_list';

    getItems(): ProductItem[] {
        const items = localStorage.getItem(this.STORAGE_KEY);
        return items ? JSON.parse(items) : [];
    }

    saveItems(items: ProductItem[]): void {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    }
}