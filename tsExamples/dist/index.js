"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demo_1 = require("./examples/demo");
// Основная функция приложения
function runDemoApp() {
    console.log('🚀 TypeScript Demo Application\n');
    console.log('Демонстрация базовых типов, интерфейсов, Generics, условных операторов и циклов\n');
    // Запуск всех демонстраций
    (0, demo_1.demonstrateConditionals)();
    (0, demo_1.demonstrateLoops)();
    (0, demo_1.demonstrateGenerics)();
    console.log('\n🎉 Демонстрация завершена!');
    console.log('\nТипы данных, использованные в приложении:');
    console.log('- number: возраст, цена, ID');
    console.log('- string: имена, email, названия');
    console.log('- boolean: активность, наличие на складе');
    console.log('- any: обработка неизвестных данных');
    console.log('- void: функции без возвращаемого значения');
    console.log('- interface: User, Product');
    console.log('- type: ApiResponse, DiscountFunction');
    console.log('- Generics: DataProcessor, createApiResponse');
}
// Запуск приложения
runDemoApp();
//# sourceMappingURL=index.js.map