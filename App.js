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


// const NumeroDeEstudiantes = parseInt(prompt('number of students: '));
// const diasDelMes = prompt('number of days in the month'); 
// let estudiantes = [];
// let x = 0;
// let a = 0; 
// let f = 0;
// for(i = 1; i<= NumeroDeEstudiantes; i++){
//     estudiantes[i] = prompt(`name of student ${i}`);
//     while(x <= diasDelMes){
//         asistencias = prompt('A si asistio f si falto') 
//         if (asistencias == 'a' || asistencias == 'A'){
//             a++;
//         } 
//         else if(asistencias == 'f' || asistencias == 'F'){
//             f++;
//         }
//         x++;
//     }
//     x = 0; 
//     if (a < f){
//         document.write(`${estudiantes[i]}: Reprobo ${'<br>'}`)
//     }
//     else if(a > f){
//         document.write(`${estudiantes[i]}: Aprobo ${'<br>'}`);
//     }

// }

// const NumeroDeEstudiantes = parseInt(prompt('number of students: '));
// const diasDelMes = prompt('number of days in the month'); 
// let estudiantes = [];
// let x = 0;
// let a = 0; 
// let f = 0;

// let validarAsistencias = () =>{
//     if (a < f){
//        return document.write(`${estudiantes[i]} tiene ${f} Faltas y ${a} Asistencias de los ${diasDelMes} dias del mes: <b style="background-color:red ;">Reprobo</b> ${'<br>'}`);
//     }
//     else if(a > f){
//        return document.write(`${estudiantes[i]} tiene ${f} Faltas y ${a} Asistencias de los ${diasDelMes} dias del mes: <b>Aprobo</b> ${'<br>'}`);
//     }
// }

// for(i = 1; i<= NumeroDeEstudiantes; i++){
//     estudiantes[i] = prompt(`name of student ${i}`);
//     while(x <= diasDelMes){
//         asistencias = prompt('A si asistio f si falto') 
//         if (asistencias == 'a' || asistencias == 'A'){
//             a++;
//         } 
//         else if(asistencias == 'f' || asistencias == 'F'){
//             f++;
//         }
//         x++;
//     }
//     x = 0;
//     validarAsistencias(); 
// }
let edad;
let time;
let vip = true;

let entradaVip = () =>{
    edad = prompt('Edad: ');
    if (edad >= 18){
        time = prompt('Current time: ');
        if (time >= '2am' && vip){
            vip = false;
            return alert(`Puedes pasar gratis por que son las: ${time}`);
        }
        else{
            return alert(`El valor de la entrada es de $5 Dolares: `);
        }
    }
    else(
        alert('No se permiten menores de 18 años')
    )
}

entradaVip();
entradaVip();
entradaVip();
entradaVip();