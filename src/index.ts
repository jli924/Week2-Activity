import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

const result_subtract = calc.subtract(2, 3);
console.log(`result_subt = ${result_subtract}`)

const result_divide = calc.divide(6, 2);
console.log(`result_divide = ${result_divide}`)

console.log('done.')
