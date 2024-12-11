const express = require("express");
const router = express.Router();
const principalController = require("../controller/principalController"); 
const upload = require("../config/upload");


//login
router.get('/login', principalController.login);

router.post('/login', principalController.logar);

router.post('/cadastrar', principalController.cadastrar);


router.get('/token', principalController.token);

//principal

router.get('/', principalController.principal);

router.get('/detalhes', principalController.detalhes);

router.get('/meuperfil', principalController.meuperfil);

//adm

router.get('/indexadm', principalController.abreprin);

router.get('/perfiladm', principalController.perfiladm);

router.get('/usuarios', principalController.usuarios);

router.get('/livros', principalController.livros);

router.get('/agendamentos', principalController.agendamentos);

router.get('/cadastrolivros', principalController.cadastrolivros);

router.get('editarlivro', principalController.editarlivro);

router.get('/criaragendamento', principalController.criaragendamento);

router.get('/editaragendamento', principalController.editaragendamento);



module.exports = router;