const { construccion, recorrerNum, Pila, Lista } = require("./CPM1false");

let testConst = construccion()
console.log(testConst("ladrillos"))
console.log(testConst("ruedas"))

console.log("construccion espera -> ['ladrillos', 'ruedas']")






let testPila = new Pila();
testPila.add(1);
testPila.add(2);
testPila.add(3);
testPila.add(4);
testPila.add(5);

console.log(testPila.remove()); // Debe mostrar 5
console.log(testPila.removeSpecial(1)); // Debe mostrar 3
console.log(testPila.removeSpecial(0)); // Debe mostrar 1

console.log("Pila espera -> 5, 3, 1");