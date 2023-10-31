var nombreValue = "Mauro";
var myKey = "nombre";

const obj = {
  a: 1,
  b: 2,
};
// if(!obj.a){
//     console.log("in")
// }

obj.kkkk = 43333;

obj[myKey] = nombreValue;
console.log(obj);

for (const propkey in obj) {
  console.log(propkey);
  console.log(obj[propkey]);
}

console.log(obj.a);

// THIS *
//* Trabajar con OBJETO {} y métodos para ese OBJETO

// Crear o traer el objeto

const objVeduleria = {
  title: "",
  verduras: [],
  frutas: [],
  direccion: "",
  dueño: {
    nombre: "",
    edad: "",
  },
//   dede: function agregarFruta(fruta) {
//     this.frutas.push(fruta);
//     return this.frutas;
//   },
  // initData: function(){return this.direccion}
};

function initData(dueño, title, direccion) {
  this.dueño = dueño;
  this.title = title;
  this.direccion = direccion;
  return this.title;
}

function verDireccion() {
  return this.direccion;
}

function agregarFruta(fruta) {
  this.frutas.push(fruta);
  return this.frutas;
}

const testBindagregarFruta= agregarFruta.bind(objVeduleria);
testBindagregarFruta("pera")
const testBindFuncinitData = initData.bind(objVeduleria);
testBindFuncinitData({ nombre: "mau", edad: 32 }, "don juan", "Uruguay 555");

console.log(objVeduleria);
