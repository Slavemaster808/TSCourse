"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demonstrateGenerics = exports.demonstrateLoops = exports.demonstrateConditionals = exports.products = exports.users = void 0;
const helpers_1 = require("../utils/helpers");
// Данные для демонстрации
exports.users = [
    { id: 1, name: 'Анна', email: 'anna@example.com', age: 25, isActive: true, role: 'user' },
    { id: 2, name: 'Петр', email: 'petr@example.com', age: 30, isActive: false, role: 'admin' },
    { id: 3, name: 'Ольга', email: 'olga@example.com', age: 22, isActive: true, role: 'user' },
    { id: 4, name: 'Иван', email: 'ivan@example.com', age: 35, isActive: true, role: 'moderator' }
];
exports.products = [
    { id: 101, title: 'Ноутбук', price: 50000, category: 'Электроника', inStock: true, tags: ['новинка', 'топ'] },
    { id: 102, title: 'Смартфон', price: 25000, category: 'Электроника', inStock: true },
    { id: 103, title: 'Наушники', price: 5000, category: 'Аксессуары', inStock: false },
    { id: 104, title: 'Клавиатура', price: 3000, category: 'Аксессуары', inStock: true, tags: ['беспроводная'] }
];
// Демонстрация условных операторов
const demonstrateConditionals = () => {
    console.log('\n=== УСЛОВНЫЕ ОПЕРАТОРЫ ===\n');
    // if-else
    for (const user of exports.users) {
        if (user.age >= 30) {
            console.log(`${user.name} - старше 30 лет`);
        }
        else if (user.age >= 25) {
            console.log(`${user.name} - от 25 до 30 лет`);
        }
        else {
            console.log(`${user.name} - младше 25 лет`);
        }
    }
    // switch-case
    console.log('\n--- Роли пользователей ---');
    for (const user of exports.users) {
        let roleDescription;
        switch (user.role) {
            case 'admin':
                roleDescription = 'Администратор (полные права)';
                break;
            case 'moderator':
                roleDescription = 'Модератор (ограниченные права)';
                break;
            case 'user':
                roleDescription = 'Обычный пользователь';
                break;
            default:
                roleDescription = 'Неизвестная роль';
        }
        console.log(`${user.name}: ${roleDescription}`);
    }
    // Тернарный оператор
    console.log('\n--- Статус активности ---');
    exports.users.forEach(user => {
        const status = user.isActive ? 'активен' : 'неактивен';
        console.log(`${user.name}: ${status}`);
    });
};
exports.demonstrateConditionals = demonstrateConditionals;
// Демонстрация циклов
const demonstrateLoops = () => {
    console.log('\n=== ЦИКЛЫ ===\n');
    // for
    console.log('--- For loop ---');
    for (let i = 0; i < Math.min(3, exports.users.length); i++) {
        console.log(`Пользователь ${i + 1}: ${exports.users[i].name}`);
    }
    // for...of
    console.log('\n--- For...of ---');
    for (const product of exports.products) {
        if (product.inStock) {
            console.log(`В наличии: ${product.title} - ${product.price} руб.`);
        }
    }
    // for...in
    console.log('\n--- For...in (по индексам) ---');
    const firstUser = exports.users[0];
    for (const key in firstUser) {
        if (firstUser.hasOwnProperty(key)) {
            console.log(`${key}: ${firstUser[key]}`);
        }
    }
    // forEach
    console.log('\n--- ForEach ---');
    exports.products.forEach((product, index) => {
        console.log(`Товар ${index + 1}: ${product.title}`);
    });
    // while
    console.log('\n--- While ---');
    let counter = 0;
    while (counter < 2) {
        console.log(`Счетчик while: ${counter}`);
        counter++;
    }
    // do-while
    console.log('\n--- Do-While ---');
    let i = 0;
    do {
        console.log(`Счетчик do-while: ${i}`);
        i++;
    } while (i < 2);
};
exports.demonstrateLoops = demonstrateLoops;
// Демонстрация Generics и типов
const demonstrateGenerics = () => {
    console.log('\n=== GENERICS И ТИПЫ ===\n');
    // Обработка пользователей
    const userProcessor = new helpers_1.DataProcessor(exports.users);
    const activeUsers = userProcessor.filter(user => user.isActive === true);
    console.log('Активные пользователи:', activeUsers.map(u => u.name));
    // Обработка товаров
    const productProcessor = new helpers_1.DataProcessor(exports.products);
    const availableProducts = productProcessor.filter(product => product.inStock);
    console.log('Доступные товары:', availableProducts.map(p => p.title));
    // Поиск по ID
    const foundUser = userProcessor.findById(2);
    console.log('Найден пользователь:', foundUser?.name);
    // Map с преобразованием типов
    const userEmails = userProcessor.map(user => user.email);
    console.log('Email пользователей:', userEmails);
    // Использование Discount function
    const discountedPrice = (0, helpers_1.calculateDiscount)(10000, 15);
    console.log('Цена со скидкой 15%:', discountedPrice);
    // Void функция
    console.log('\n--- Void функция ---');
    (0, helpers_1.logUserInfo)(exports.users[0]);
    // Any тип
    console.log('\n--- Any тип ---');
    console.log((0, helpers_1.handleUnknownData)('Hello'));
    console.log((0, helpers_1.handleUnknownData)(42));
    console.log((0, helpers_1.handleUnknownData)(true));
    console.log((0, helpers_1.handleUnknownData)({}));
};
exports.demonstrateGenerics = demonstrateGenerics;
//# sourceMappingURL=demo.js.map