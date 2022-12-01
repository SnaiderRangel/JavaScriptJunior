const estudiante = [];
const cantidadEstudiantes = prompt('Digite la cantidad de estudiantes: ');
const cantidadDias = prompt('Digite la cantidad de dias del mes: ');
let x;
let f;
let a;
let asistencias;

const validarAsistencias = () =>{
    x = 0
    while(x < cantidadDias){
        if(asistencias == 'a' || asistencias == 'A'){
            a++;
        }
        else if(asistencias == 'f' || asistencias == 'F'){
            f++;
        }
        x++;
    }
}

for (i = 1; i < cantidadEstudiantes; i++){
    estudiante[i] = prompt('Digite el nombre del estudiante: ');

    validarAsistencias();

    if (a <= ((a+f)*0.1)){
        return document.write(`El ${estudiante[i]}: Reprobo <br>`);
    }
    else if (a > ((a+f)*0.1)){
        return document.write(`El ${estudiante[i]}: Aprobo <br>`);
    }
}