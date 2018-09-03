//required
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base,limite = 10) =>{

    console.log("=====================".red);
    console.log(`Tabla de ${base}`);
    console.log("=====================");
    for(let i = 1; i <= limite;i++){  
        console.log(`${base} * ${i} = ${base * i}`);
    }
   
}

let crearArchivo = (base,limite = 10) => {
    
    return new Promise((resolve, reject) => {
        // if (!Number.base) {
        //     reject('El valor indroducido no es un numero');
        //     return;
        // }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve (`tabla del ${ base } hasta el ${limite}.txt`);
        });
    });
 }

module.exports = {
    crearArchivo,
    tablaListar: listarTabla
}