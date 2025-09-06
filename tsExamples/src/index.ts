import { demonstrateConditionals, demonstrateLoops, demonstrateGenerics } from './examples/demo';

// Основная функция приложения
function runDemoApp(): void {
    console.log('🚀 TypeScript Demo Application\n');
    console.log('Демонстрация базовых типов, интерфейсов, Generics, условных операторов и циклов\n');

    // Запуск всех демонстраций
    demonstrateConditionals();
    demonstrateLoops();
    demonstrateGenerics();

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