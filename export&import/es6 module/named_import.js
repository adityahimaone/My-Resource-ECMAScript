import { coffeeStock, isCoffeeMachineReady } from './named_export.js';
import { coffeeStock as stock } from './named_export.js';
 
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
 
console.log(stock);
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/