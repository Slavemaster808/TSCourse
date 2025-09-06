import { User, Product, ApiResponse, DiscountFunction, ID } from '../types';

// Generics примеры
export class DataProcessor<T> {
    private data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    filter(predicate: (item: T) => boolean): T[] {
        const result: T[] = [];
        for (const item of this.data) {
            if (predicate(item)) {
                result.push(item);
            }
        }
        return result;
    }

    map<U>(callback: (item: T) => U): U[] {
        const result: U[] = [];
        for (const item of this.data) {
            result.push(callback(item));
        }
        return result;
    }

    findById(id: ID): T | undefined {
        for (const item of this.data) {
            if ((item as any).id === id) {
                return item;
            }
        }
        return undefined;
    }
}

// Функции с различными типами
export const calculateDiscount: DiscountFunction = (price, discountPercent) => {
    return price * (1 - discountPercent / 100);
};

export const createApiResponse = <T>(data: T, message: string = 'Success'): ApiResponse<T> => {
    return {
        data,
        status: 200,
        message,
        timestamp: new Date()
    };
};

// Void функция
export const logUserInfo = (user: User): void => {
    console.log(`User: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
};

// Any (редко используемый, но для демонстрации)
export const handleUnknownData = (data: any): string => {
    if (typeof data === 'string') {
        return `String: ${data}`;
    } else if (typeof data === 'number') {
        return `Number: ${data}`;
    } else if (typeof data === 'boolean') {
        return `Boolean: ${data}`;
    }
    return `Unknown type: ${typeof data}`;
};