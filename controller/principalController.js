const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");
const { Op } = require("sequelize");
const passport = require("../config/passport");

async function login (req,res){
    console.log(req.flash('msg'));
    res.render('login/login.ejs', { msg: req.flash('msg')});
}

const logar = (req, res, next) => {
    passport.authenticate("local", {
      failureRedirect: "/login",
      successRedirect: "/indexadm",
      failureFlash: true, 
    })(req, res, next);
  };
async function token (req,res){
    res.render('login/token.ejs');
}

async function cadastrar(req,res){
    var nome = req.body.nome;
    var email = req.body.email;
    var turma = req.body.turma;
    var senha = req.body.senha;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(senha, salt);


    try {
        const usuario = await Usuario.create({
            nome: nome,
            email: email,
            turma: turma,
            senha: hash,
        }); 

        res.redirect("/login");
    }catch(error){
        res.render("login/login", {msg: "O e-mail já possui cadastro!" });
    }
}

async function principal (req,res){
    res.render('user/index.ejs');
}

async function abreprin (req,res){
    res.render('adm/index.ejs');
}

async function detalhes(req,res){
    res.render('user/detalhes.ejs');
}

async function meuperfil(req,res){
    res.render('user/perfil.ejs');
}

async function perfiladm(req,res){
    res.render('adm/perfil-adm.ejs');
}

async function usuarios(req,res){
    res.render('adm/listar-usuarios.ejs');
}

async function livros(req,res){
    res.render('adm/listar-livros.ejs');
}

async function agendamentos(req,res) {
    res.render('adm/historico.ejs');
}

async function cadastrolivros(req,res){
    res.render('adm/cadastro-livros.ejs');
}

async function editarlivro(req,res){
    res.render('adm/editar-livro.ejs');
}

async function criaragendamento(req,res) {
    res.render('adm/criar-agendamento.ejs');
}

async function editaragendamento(req,res){
    res.render('adm/editar-agendamento.ejs');
}

module.exports ={
    login,
    abreprin,
    token,
    principal,
    detalhes,
    meuperfil,
    perfiladm,
    usuarios,
    livros,
    agendamentos,
    cadastrolivros,
    editarlivro,
    criaragendamento,
    editaragendamento,
    cadastrar,
    logar

}