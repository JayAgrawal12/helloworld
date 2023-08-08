//import employee from './exporter.js';

//let obj = new employee();
//obj.myMethod();

//import myFunc from './exporter';
//myFunc();

//import a from './exporter';
//console.log(a);

//import {a, employee, myFunc} from './exporter';
import * as exporter from './exporter'
let obj = new employee();
obj.myMethod();
exporter.myFunc();
console.log(exporter.a)