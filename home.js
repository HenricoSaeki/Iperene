// =========================
// CARROSSEL PRINCIPAL
// =========================

let index = 0;

const imagens = document.querySelector(".imagenscarrossel");
const indicadores = document.querySelectorAll(".retanguloscarrossel");

function atualizarCarrossel() {
    imagens.style.transform = `translateX(-${index * 803}px)`;

    indicadores.forEach(indicador => {
        indicador.classList.remove("ativo");
    });

    indicadores[index].classList.add("ativo");
}

function proximo() {
    index++;

    if (index >= 4) {
        index = 0;
    }

    atualizarCarrossel();
}

function anterior() {
    index--;

    if (index < 0) {
        index = 3;
    }

    atualizarCarrossel();
}

atualizarCarrossel();


// =========================
// CARROSSEL DE AVALIAÇÕES
// =========================

let indexAvaliacao = 0;

const cardsAvaliacao =
    document.querySelector(".wrappercards-avaliacao");

const todosCards =
    document.querySelectorAll(".cardavaliacao");

const indicadoresContainer =
    document.querySelector(".wrapperretanguloscarrossel2");

const cardsPorPagina = 3;

const totalPaginas =
    Math.ceil(todosCards.length / cardsPorPagina);


// Criar indicadores

for (let i = 0; i < totalPaginas; i++) {

    const indicador = document.createElement("div");

    indicador.classList.add("retanguloscarrossel2");

    indicadoresContainer.appendChild(indicador);
}

const indicadoresAvaliacao =
    document.querySelectorAll(
        ".wrapperretanguloscarrossel2 .retanguloscarrossel2"
    );


// Atualizar cards

function atualizarCards() {

    const card = todosCards[0];

    const gap =
        parseFloat(getComputedStyle(cardsAvaliacao).gap);

    const deslocamento =
        (card.offsetWidth * 3) + (gap * 3);

    cardsAvaliacao.style.transform =
        `translateX(-${indexAvaliacao * deslocamento}px)`;

    indicadoresAvaliacao.forEach(indicador => {
        indicador.classList.remove("ativo");
    });

    indicadoresAvaliacao[indexAvaliacao].classList.add("ativo");
}


// Próximo card

function proximoCard() {

    if (indexAvaliacao < totalPaginas - 1) {

        indexAvaliacao++;

        atualizarCards();
    }
}


// Card anterior

function anteriorCard() {

    if (indexAvaliacao > 0) {

        indexAvaliacao--;

        atualizarCards();
    }
}

atualizarCards();


// =========================
// CARROSSEL DOS PERFIS
// =========================

let indexPerfil = 0;

const perfis =
    document.querySelector(".wrapperperfis");

const todosPerfis =
    document.querySelectorAll(".perfil");

const perfisPorPagina = 4;

const totalPaginasPerfil =
    Math.ceil(todosPerfis.length / perfisPorPagina);

const barrasContainer =
    document.querySelector(".barras");


// Criar barrinhas

for (let i = 0; i < totalPaginasPerfil; i++) {

    const barra = document.createElement("div");

    barra.classList.add("barra");

    barrasContainer.appendChild(barra);
}

const barrasPerfil =
    document.querySelectorAll(".barra");


// Atualizar perfis

function atualizarPerfis() {

    perfis.style.transform =
        `translateX(-${indexPerfil * 92}vw)`;

    barrasPerfil.forEach(barra => {
        barra.classList.remove("ativo");
    });

    barrasPerfil[indexPerfil].classList.add("ativo");
}


// Próximo perfil

function proximoPerfil() {

    if (indexPerfil < totalPaginasPerfil - 1) {

        indexPerfil++;

        atualizarPerfis();
    }
}


// Perfil anterior

function anteriorPerfil() {

    if (indexPerfil > 0) {

        indexPerfil--;

        atualizarPerfis();
    }
}

atualizarPerfis();


// =========================
// MODO NOITE
// =========================

function modoNoite() {

    document.body.classList.toggle("modo-noite");

  const SetaEsquerdaAvaliacao = 
        document.querySelector(".setaAvaliacaoEsquerda")

        const SetaDireitaAvaliacao =
        document.querySelector(".setaAvaliacaoDireita")
    // =========================
    // ELEMENTOS
    // =========================

    const setasPerfil =
        document.querySelectorAll(".setaroxaperfil");

    const linkedinsPerfil =
        document.querySelectorAll(".linkedinroxo");

    const qualidade =
        document.getElementById("iconeQualidade");

    const confianca =
        document.getElementById("iconeConfianca");

    const seguranca =
        document.getElementById("iconeSeguranca");

    const disciplina =
        document.getElementById("iconeDisciplina");

    const colaboracao =
        document.getElementById("iconeColaboracao");

    const tema =
        document.getElementById("tema");

    const missao =
        document.getElementById("iconeMissao");

    const visao =
        document.getElementById("iconeVisao");

    const valores =
        document.getElementById("iconeValores");


    // IMPORTANTE:
    // As setas grandes usam CLASS no HTML,
    // não ID.

    const setaEsquerdaPerfil =
        document.querySelector(".setaEsquerdaPerfil");

    const setaDireitaPerfil =
        document.querySelector(".setaDireitaPerfil");


    // Logo do header

    const logoHeader =
        document.getElementById("logoHeader");


      

    // =========================
    // MODO NOITE
    // =========================

    if (document.body.classList.contains("modo-noite")) {


        SetaEsquerdaAvaliacao.src = "img/setaesquerdanoite.png";
        SetaDireitaAvaliacao.src = "img/setadireitanoitecerto.png";


        qualidade.src =
            "img/certificadonoite.png";

        confianca.src =
            "img/conversanoite.png";

        seguranca.src =
            "img/cadeadonoite.png";

        disciplina.src =
            "img/formaturanoite.png";

        colaboracao.src =
            "img/valoresnoite.png";


        // Ícone do modo noite → sol

        tema.src =
            "img/imagem sol.png";
tema.style.height = "4vh";



        // Missão, visão e valores

        missao.src =
            "img/missaocerto.png";

        visao.src =
            "img/visaocerto.png";

        valores.src =
            "img/valorescerto.png";


        // Setas grandes dos perfis

        setaEsquerdaPerfil.src =
            "img/setaesquerdanoite.png";

        setaDireitaPerfil.src =
            "img/setadireitanoitecerto.png";


        // Setas dentro dos perfis

        setasPerfil.forEach(seta => {

            seta.src =
                "img/setanoite.png";

        });


        // LinkedIn

        linkedinsPerfil.forEach(linkedin => {

            linkedin.src =
                "img/linkedinnoite.png";

        });


        // =========================
        // LOGO HEADER - NOITE
        // =========================

        logoHeader.src =
            "img/logoiperene noite.png";
    }


    // =========================
    // MODO DIA
    // =========================

    else {

        // Setas dentro dos perfis

        setasPerfil.forEach(seta => {

            seta.src =
                "img/setaroxaperfil.png";

        });


        // LinkedIn

        linkedinsPerfil.forEach(linkedin => {

            linkedin.src =
                "img/linkedinroxo.png";

        });


        // Ícones

        qualidade.src =
            "img/img camera.png";

        confianca.src =
            "img/img mao.png";

        seguranca.src =
            "img/img cadeado.png";

        disciplina.src =
            "img/img relogio.png";

        colaboracao.src =
            "img/img pessoa.png";


        // Ícone do modo dia → lua

        tema.src =
            "img/image 282.png";


        // Missão, visão e valores

        missao.src =
            "img/Group 35 missao.png";

        visao.src =
            "img/Group 36 visao.png";

        valores.src =
            "img/Group 37 valores.png";


        // Setas grandes dos perfis

        setaEsquerdaPerfil.src =
            "img/setaesquerdadia.png";

        setaDireitaPerfil.src =
            "img/setadireitadia.png";


        // =========================
        // LOGO HEADER - DIA
        // =========================

        logoHeader.src =
            "img/logoiperenecerta.png";
    }
}