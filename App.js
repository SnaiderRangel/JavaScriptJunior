const usuarios = [];
const contraseñas = [];

for(i = 0; i < 2; i++){
    nameOfUser = prompt('Nombre de usuario');
    paswordOfUser = prompt('Contraseña');

    usuarios[i] = nameOfUser;
    contraseñas[i] = paswordOfUser;
    document.write(`La contraseña de ${usuarios[i]} es ${contraseñas[i]}<br>`);
    if (i == 1){
        document.write('<br>' + usuarios);
    }
}
