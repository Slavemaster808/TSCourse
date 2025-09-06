export type ID = number | string;
export interface User {
    id: ID;
    name: string;
    email: string;
    age: number;
    isActive?: boolean;
    role: 'user' | 'admin' | 'moderator';
}
export interface Product {
    id: ID;
    title: string;
    price: number;
    category: string;
    inStock: boolean;
    tags?: string[];
}
export type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
    timestamp: Date;
};
export type DiscountFunction = (price: number, discountPercent: number) => number;
//# sourceMappingURL=index.d.ts.map