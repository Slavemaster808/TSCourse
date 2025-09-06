import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../../interfaces/product-item.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shopping-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './shopping-item.html',
    styleUrls: ['./shopping-item.scss']
})
export class ShoppingItemComponent {
    @Input() item!: ProductItem;
    @Output() togglePurchased = new EventEmitter<number>();
    @Output() delete = new EventEmitter<number>();
}