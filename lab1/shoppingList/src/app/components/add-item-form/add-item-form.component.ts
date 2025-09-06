import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ProductItem } from '../../interfaces/product-item.interface';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-item-form',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './add-item-form.html',
    styleUrls: ['./add-item-form.scss']
})
export class AddItemFormComponent {
    @Output() itemAdded = new EventEmitter<Omit<ProductItem, 'id' | 'purchased'>>();

    name: string = '';
    quantity: number = 1;

    addItem(): void {
        const name = this.name.trim();
        const quantity = this.quantity;

        if (name && quantity > 0) {
            this.itemAdded.emit({ name, quantity });
            this.name = '';
            this.quantity = 1;
        }
    }
}