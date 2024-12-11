const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
var session = require("express-session");
var passport = require("passport"); 
var moment = require("moment"); 
app.locals.moment = moment;
const flash = require("req-flash");

const principalRoute = require("./router/principalRoute");

const Usuario = require("./models/Usuario");


//configuração dos arquivos de visão (VIEWS)
app.set("view engine", "ejs");

//configurar para receber dados por metodo post
app.use(express.urlencoded({ extended: false }));


//pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Middleware para passar mensagens flash para as views
app.use((req, res, next) => {
  res.locals.messages = req.flash(); // Passa todas as mensagens para o template
  next();
});

app.use(passport.authenticate("session"));

app.use("/", principalRoute);


app.listen(port, function () {
  console.log("Servidor funcionando na porta: " + port);
});