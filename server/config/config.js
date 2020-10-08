///PUERTO

process.env.PORT = process.env.PORT || 3000;

//entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//////////////////////////VENCIMIENTO DEL TOKEN
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


////////////////////////SEED DE AUTENTIFICACION
process.env.SEED = process.env.SEED || 'este-es-el-sed-desarrollo';







//Base de datos

let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = process.env.MONGO_URI;
}

process.env.URLDB = urlBD;