const jwt = require('jsonwebtoken');
/////
////Verifica token

let verificaToken = (req, res, next) => {

    let token = req.get('token'); //o autorizacion como mandemos

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: ' Token no válido'
                }
            })
        }


        req.usuario = decoded.usuario;
        next();

    })

};


///////////////////////////////VERIFICA ROLE DE ADMIN

let verificaAdmind_Role = (req, res, next) => {

    let usuario = req.usuario
    if (usuario.role === 'ADMIN') {
        next();

    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es admin'
            }
        })
    }


}

module.exports = {
    verificaToken,
    verificaAdmind_Role
}