

//Reguler declaration
function sayHello1(greet){
    console.log(`${greet}!`);
}

//reguler expression

const sayName1 = function (name){
    console.log(`nama saya ${name}`)
}
//arrow expression

const sayHello2 = (greet) =>{
    console.log(greet);
}

const sayName2 = (name) => {
    console.log(`nama saya ${name}`)
}


sayHello1("Hello");
sayHello2("Hai");
sayName1("Adit");
sayName2("Himawan");

// Without Parameter
const sayHello = () => console.log("Selamat Datang di Jungle!");
sayHello();

//Return Value(nilai)
const multiply = (a,b) => a * b;
console.log(multiply(5,2));
