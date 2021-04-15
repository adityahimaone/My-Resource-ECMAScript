const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!state.isCoffeeMachineBusy) {
                resolve("Mesin siap digunakan");
            }else{
                reject("Mesin sedang sibuk");
            }
        }, 1000);
    })
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250){
                resolve("Stock cukup, bisa membuat Kopi");
            }else{
                reject("Stock tidak cukup");
            }
        }, 1500);
    });
};

const brewCoffee = () => {
    console.log("membuat kopi anda")
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Kopi sudah Jadiiii!");
        }, 2000);
    });
};

function makeEspresso() {
    checkAvailability()
        .then((value) =>{
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        })
}

makeEspresso();