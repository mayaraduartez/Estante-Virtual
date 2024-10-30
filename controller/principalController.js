async function login (req,res){
    res.render('login/login.ejs');
}

async function token (req,res){
    res.render('login/token.ejs');
}

async function principal (req,res){
    res.render('user/index.ejs');
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


}