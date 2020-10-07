const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} no es un rol válido'
};



let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true, 'el nombre es necesario']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'el correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'la contraseña es obligatoria']
    },
    img: { //no obligatoria
        type: String,
        required: false
    },
    role: { //default: 'USER_ROLE'
        type: String,
        default: 'USER',
        enum: rolesValidos


    },
    estado: { //boolean
        type: Boolean,
        default: true
    },
    google: { //boolean
        type: Boolean,
        default: false
    }
});


usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})

module.exports = mongoose.model('Usuario', usuarioSchema);