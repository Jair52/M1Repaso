/*Crear una memoria que me de la posibilidad de guardar o editar datos de diferentes usuarios 
pudiendo almacenarlos con alguin identificador unico. Para guardar vas a recibir por parametro el usuario. 
Para editarlo recibe el identifiador del usuario.*/

function memoDrive(){
    //Creamos la memoria que va a interactuar con la clousure y el id que es para identificar a cada usuario
    let memo = {};
    let id = 1;

    //Creamos un objeto de clousure que cada uno realiza su respectiva tarea para Guardar y Editar 
    const saveEdit = {
        save : function(obj){
            let namekey= 'user_' + id;
            id++;
            memo[namekey] = obj;
            return memo;
        },
        edit: function(userId, name){
            console.log(memo[userId]);
            memo[userId] = name;
            return name;
        }
    }

    return saveEdit;
}

const testMemoDrive = memoDrive();
console.log(testMemoDrive.save({
    name: 'Mauro'
}));
console.log(testMemoDrive.save({
    name: 'Martin'
}));

console.log(testMemoDrive.edit('user_1', 'Robert'));

//El objetivo de la consgina es guardar en una memoria las eltras que me pasan por parametro con su valor
//equivalente en code SVGAnimatedInteger
//String de letra

console.log('a'.charCodeAt());
function memoDrive2(data) {
       function createCodeAscii(str){
       if(data.hasOwnProperty(str)) return 'Este simbolo ya existe';
       let value = str.charCodeAt();
       data[str] = value;
       return 'Cuqluier cosa';
       }
return createCodeAscii;
}

const res = memoDrive2();
console.log(res('t'));
