import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../../interfaces/product-item.interface';
import { StorageService } from '../../services/storage.service';
import { AddItemFormComponent } from '../add-item-form/add-item-form.component';
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';

@Component({
    selector: 'app-shopping-list',
    standalone: true,
    imports: [CommonModule, AddItemFormComponent, ShoppingItemComponent],
    templateUrl: './shopping-list.html',
    styleUrls: ['./shopping-list.scss']
})
export class ShoppingListComponent implements OnInit {
    items: ProductItem[] = [];
    filter: 'all' | 'purchased' | 'active' = 'all';

    constructor(private storageService: StorageService) { }

    ngOnInit(): void {
        this.items = this.storageService.getItems();
    }

    get filteredItems(): ProductItem[] {
        switch (this.filter) {
            case 'purchased':
                return this.items.filter(item => item.purchased);
            case 'active':
                return this.items.filter(item => !item.purchased);
            default:
                return this.items;
        }
    }

    addItem(newItem: Omit<ProductItem, 'id' | 'purchased'>): void {
        const item: ProductItem = {
            ...newItem,
            id: Date.now(),
            purchased: false
        };
        this.items.push(item);
        this.saveItems();
    }

    deleteItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
        this.saveItems();
    }

    toggleItemPurchased(id: number): void {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.purchased = !item.purchased;
            this.saveItems();
        }
    }

    setFilter(filter: 'all' | 'purchased' | 'active'): void {
        this.filter = filter;
    }

    private saveItems(): void {
        this.storageService.saveItems(this.items);
    }
}