import { User, ApiResponse, DiscountFunction, ID } from '../types';
export declare class DataProcessor<T> {
    private data;
    constructor(data: T[]);
    filter(predicate: (item: T) => boolean): T[];
    map<U>(callback: (item: T) => U): U[];
    findById(id: ID): T | undefined;
}
export declare const calculateDiscount: DiscountFunction;
export declare const createApiResponse: <T>(data: T, message?: string) => ApiResponse<T>;
export declare const logUserInfo: (user: User) => void;
export declare const handleUnknownData: (data: any) => string;
//# sourceMappingURL=helpers.d.ts.map