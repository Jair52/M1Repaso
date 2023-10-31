// Set
const dataGeneral = [2, 3, 1, 4, 54, 2, 1, 2, "hola", "bye", "hola"];
console.log(dataGeneral.length);

const dataSinDuplicados = new Set(dataGeneral);

console.log(dataSinDuplicados);
console.log(dataSinDuplicados.size);

dataSinDuplicados.add(2);
console.log(dataSinDuplicados);

for (const elemento of dataSinDuplicados) {
  console.log(elemento);
}

// Convertir el Set de nuevo a un array
const arraySinDuplicados = Array.from(dataSinDuplicados);

// Closure
// Lista de carros

function myNewAddCars() {
  var listCars = [];
  return function (car) {
    for (let i = 0; i < listCars.length; i++) {
      if (car.toLocaleLowerCase() === listCars[i].toLocaleLowerCase()) {
        return "this car exists";
      }
    }
    listCars.push(car);
    return listCars;
  };
}

const listCarsA = myNewAddCars()
console.log(listCarsA("bmw"))
console.log(listCarsA("foRd"))
console.log(listCarsA("fiat"))
console.log(listCarsA("FORD"))

// This
// user pass
const users = {
  listUser: [
    {
      name: "mau",
      pass: 1234,
    },
    {
      name: "jimy",
      pass: 12,
    },
    {
      name: "seba",
      pass: 77,
    },
  ],
};
function addUser(user){
    this.listUser.push(user)
    return this.listUser
}
// Biendeo natural
users.addUser = addUser
console.log(users.addUser({name:"juan",pass:1}))

// Bind (sin necesidad de params)
const instanceBINDaddUser = addUser.bind(users)
console.log(instanceBINDaddUser({name:"susu", pass:98}))


// Apply (con utilidad de params)
const instanceAPPLYaddUser = addUser.apply(users,[{name:"applyuuu", pass:344}])
console.log(instanceAPPLYaddUser)
