// const usuarios = [];
// const contraseñas = [];

// for(i = 0; i < 2; i++){
//     nameOfUser = prompt('Nombre de usuario');
//     paswordOfUser = prompt('Contraseña');

//     usuarios[i] = nameOfUser;
//     contraseñas[i] = paswordOfUser;
//     document.write(`La contraseña de ${usuarios[i]} es ${contraseñas[i]}<br>`);
//     if (i == 1){
//         document.write('<br>' + usuarios);
//     }
// }

// let pc = {
//     nombre:'Force',
//     procesador: 'Intel i7'
// }
// document.write(pc['nombre'] + '<br>' + pc['procesador'] + '<br>')

// const laptop = ['Victus', 'Rizen 7'];
// let nombreDeEquipo = laptop[0];
// let nombreDelProcesador = laptop[1];

// document.write(`${nombreDeEquipo} <br> ${nombreDelProcesador}`);

let total = 0;
let cantidaDenumeros = prompt('Digite la cantidad de numeros: ');
 for(i = 1; i <= cantidaDenumeros;i++){
    let numero; 
    numero = prompt(`numero ${i}: `);
    total = parseInt(total);
    numero = parseInt(numero);
    total += numero;
 }

 document.write(`El resultado de la suma de 10 numeros es: ${total}`);