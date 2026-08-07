import{formatCurrency} from '../scripts/utils/money.js';

console.log('test suite : formatCurrency')

console.log('coverts cents into dollars')
if (formatCurrency(2069) == '20.69') {
    console.log('passed');
}
else {
    console.log('failed');
}


console.log('works for 0')
if (formatCurrency(0) == '0.00') {
    console.log('passed');
}
else {
    console.log('failed');
}


console.log('rounds up to nearest code')
if (formatCurrency(2000.5) == '20.01') {
    console.log('passed');
}
else {
    console.log('failed');
}