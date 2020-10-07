///PUERTO

process.env.PORT = process.env.PORT || 3000;

//entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de datos

let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = 'mongodb+srv://nosferatum963:Yzb4aqKJyKqpNwK1@cluster0.nhnhj.mongodb.net/cafe'
}

process.env.URLDB = urlBD;