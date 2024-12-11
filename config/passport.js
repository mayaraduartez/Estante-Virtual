const Usuario = require("../models/Usuario.js"); 
const bcrypt = require("bcrypt"); 
const passport = require("passport"); 
var LocalStrategy = require("passport-local"); 

passport.use(
    new LocalStrategy({passReqToCallback: true}, 
      async function (req, username, password, cb) {
      try {
        const usuario = await Usuario.findOne({ where: { email: username } });
        
        if (!usuario) {
          req.flash('msg', 'Email não encontrado.')
          return cb(null, false);
        }
        if (!bcrypt.compareSync(password, usuario.senha)) {
          req.flash('msg', 'Senha incorreta.')
          return cb(null, false);
        }
        
        return cb(null, usuario);
      } catch (err) {
        return cb(err);
      }
    })
  );
  

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, email: user.email, nome: user.nome, admin: user.admin });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});
module.exports = passport;