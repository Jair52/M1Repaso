class Verduleria {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.verduras = [];
    this.frutas = [];
  }
}

Verduleria.prototype.agregarFruta = function(fruta){
    this.frutas.push(fruta)
    return this.fruta
}

// INSTANCIA

const newVerduleria = new Verduleria("manuel", 3101)
console.log(newVerduleria)
newVerduleria.agregarFruta("pera")
console.log(newVerduleria)

/*
agregarFruta = {
    fruta: undefined
}

.agregarFruta("pera")

agregarFruta = {
    fruta: pera
}
*/





Verduleria.prototype.agregarVerdura = function(fruta){

}


// function Verduleria(title, id) {
//   this.title = title;
//   this.id = id;
//   this.verduras = [];
//   this.frutas = [];
// }
