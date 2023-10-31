const listaDeProductos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 10.99,
    descripcion: "Descripción del Producto 1",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 15.99,
    descripcion: "Descripción del Producto 2",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 22.5,
    descripcion: "Descripción del Producto 3",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 8.49,
    descripcion: "Descripción del Producto 4",
  },
  // Agrega más productos según sea necesario
];

// Recorrer un array productos y ver si se encuentra (buscar por nombre)
// por params se pasa una lista de productos

function searchProduct(list, name) {
  if (list.length === 0) return "producto NO encontrado";

  let product = list.pop();
 
  console.log(product.nombre);
  console.log(name);

  if (name === product.nombre) {
    return "producto encontrado " + product.id;
  }
  return searchProduct(list, name);
}

console.log(searchProduct(listaDeProductos, "Producto 3"));
