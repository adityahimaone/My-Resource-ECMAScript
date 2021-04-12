// Cara 1
class YourClassName{}
class YourAnotherClassName{
    constructor(property1, property2) {}
}
 
 
// Cara 2
function YourClassName() {}
function YourAnotherClassName(property1, property2) {}
 
 
// pemanggilannya
const nameOfObject = YourClassName();
const nameOfObject2 = new YourAnotherClassName('value of property', 123);