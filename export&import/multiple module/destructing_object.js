const {coffeeStock, isCoffeeMachineReady} =  require('./state');


const coffeMachine = (coffe,stock) => {
    if (coffeeStock[coffe] >= stock && isCoffeeMachineReady===true){
        console.log("Kopi siap dihidangkan dengan mesin");
    } else if (coffeeStock[coffe] >= stock && isCoffeeMachineReady===false) {
        console.log("Kopi siap dihidangkan tidak dengan mesin");
    } else {
        console.log("kopi habis lurrr")
    }
}

coffeMachine("robusta",80)