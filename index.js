// Задание 1: Использование forEach для вывода элементов массива
const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

names.forEach((name) => {
  console.log(`Привет, ${name}`);
});

// Задание 2: Использование map для преобразования массива
const numbers = [1, 2, 3, 4, 5];

const multipliedNumbers = numbers.map((number) => number * 10);

console.log(multipliedNumbers);

// Задание 3: Использование filter для фильтрации массива
const numbers2 = [5, 12, 8, 130, 44];

const numbersGreaterThen10 = numbers2.filter((number) => number > 10);

console.log(numbersGreaterThen10);

// Задание 4: Комбинирование map и filter для обработки данных
const people = [
  { name: 'Иван', age: 23 },
  { name: 'Мария', age: 18 },
  { name: 'Алексей', age: 32 },
  { name: 'Ольга', age: 24 },
  { name: 'Сергей', age: 17 },
  { name: 'Анна', age: 21 },
];

const filteredPeople = people
  .filter((person) => person.age > 18)
  .map((person) => `${person.name} (${person.age} лет)`);

console.log(filteredPeople);

// Задание 5: Использование reduce для агрегации данных
const sales = [
  { product: 'Телефон', price: 50000, quantity: 1 },
  { product: 'Чехол', price: 1500, quantity: 2 },
  { product: 'Зарядное устройство', price: 2500, quantity: 1 },
];

const totalSales = sales.reduce((total, sale) => total + (sale.price * sale.quantity), 0);

console.log(`Общая стоимость продаж: ${totalSales}`);
