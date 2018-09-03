
//YARGS QUE CONTROLA LOS PARAMETROS DE LA APLICACION EN TERMINAL
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');


//Con la destructuracion obtengo especificamente. declaro la funcion que me llega como parametro
const { crearArchivo,tablaListar } = require('./multiplicar/multiplicar');


//TODO AQUELLA INSTRUCCION QUE NO ESTÉ DEFINIDA CON UN VALOR
let comando = argv._[0];

switch(comando){
    case 'listar':
        console.log('listar');
        tablaListar(argv.base,argv.limite);
    break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base,argv.limite)   
        .then(archivo => console.log('Archivo creado : ',colors.green(archivo)))
        .catch(err => console.log(err));
    break;

    default:
        console.log('comando no reconocido');
    break;

}

// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv);
