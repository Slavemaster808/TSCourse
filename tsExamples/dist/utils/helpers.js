"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUnknownData = exports.logUserInfo = exports.createApiResponse = exports.calculateDiscount = exports.DataProcessor = void 0;
// Generics примеры
class DataProcessor {
    constructor(data) {
        this.data = data;
    }
    filter(predicate) {
        const result = [];
        for (const item of this.data) {
            if (predicate(item)) {
                result.push(item);
            }
        }
        return result;
    }
    map(callback) {
        const result = [];
        for (const item of this.data) {
            result.push(callback(item));
        }
        return result;
    }
    findById(id) {
        for (const item of this.data) {
            if (item.id === id) {
                return item;
            }
        }
        return undefined;
    }
}
exports.DataProcessor = DataProcessor;
// Функции с различными типами
const calculateDiscount = (price, discountPercent) => {
    return price * (1 - discountPercent / 100);
};
exports.calculateDiscount = calculateDiscount;
const createApiResponse = (data, message = 'Success') => {
    return {
        data,
        status: 200,
        message,
        timestamp: new Date()
    };
};
exports.createApiResponse = createApiResponse;
// Void функция
const logUserInfo = (user) => {
    console.log(`User: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
};
exports.logUserInfo = logUserInfo;
// Any (редко используемый, но для демонстрации)
const handleUnknownData = (data) => {
    if (typeof data === 'string') {
        return `String: ${data}`;
    }
    else if (typeof data === 'number') {
        return `Number: ${data}`;
    }
    else if (typeof data === 'boolean') {
        return `Boolean: ${data}`;
    }
    return `Unknown type: ${typeof data}`;
};
exports.handleUnknownData = handleUnknownData;
//# sourceMappingURL=helpers.js.map