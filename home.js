// =========================
// CARROSSEL PRINCIPAL (Playtime)
// =========================

let index = 0;

const imagens = document.querySelector(".imagenscarrossel");
const indicadores = document.querySelectorAll(".retanguloscarrossel");

function atualizarCarrossel() {
    // usa a largura real da imagem em px (antes era 42.5vw fixo)
    const largura = imagens.querySelector("img").offsetWidth;

    imagens.style.transform = `translateX(-${index * largura}px)`;

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
let cardsPorPagina = 3;
let totalPaginas = 1;

const cardsAvaliacao = document.querySelector(".wrappercards-avaliacao");
const janelaAvaliacao = document.querySelector(".containercards-avaliacao");
const todosCards = document.querySelectorAll(".cardavaliacao");
const indicadoresContainer = document.querySelector(".wrapperretanguloscarrossel2");

function atualizarCards() {

    const gap = parseFloat(getComputedStyle(cardsAvaliacao).columnGap) || 0;
    const passo = todosCards[0].offsetWidth + gap;

    // quantos cards cabem na janela agora (3 no desktop, 2 no tablet, 1 no celular)
    cardsPorPagina = Math.max(
        1,
        Math.round((janelaAvaliacao.offsetWidth + gap) / passo)
    );

    totalPaginas = Math.ceil(todosCards.length / cardsPorPagina);

    if (indexAvaliacao > totalPaginas - 1) {
        indexAvaliacao = totalPaginas - 1;
    }

    // recria os indicadores (a quantidade muda conforme a tela)
    indicadoresContainer.innerHTML = "";

    for (let i = 0; i < totalPaginas; i++) {
        const indicador = document.createElement("div");
        indicador.classList.add("retanguloscarrossel2");

        if (i === indexAvaliacao) {
            indicador.classList.add("ativo");
        }

        indicadoresContainer.appendChild(indicador);
    }

    // não deixa passar do último card (evita espaço vazio no fim)
    const maximo = Math.max(0, cardsAvaliacao.offsetWidth - janelaAvaliacao.offsetWidth);
    const deslocamento = Math.min(indexAvaliacao * cardsPorPagina * passo, maximo);

    cardsAvaliacao.style.transform = `translateX(-${deslocamento}px)`;
}

function proximoCard() {

    if (indexAvaliacao < totalPaginas - 1) {
        indexAvaliacao++;
        atualizarCards();
    }
}

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
let perfisPorPagina = 4;
let totalPaginasPerfil = 1;

const perfis = document.querySelector(".wrapperperfis");
const janelaPerfis = document.querySelector(".containerperfis");
const todosPerfis = document.querySelectorAll(".perfil");
const barrasContainer = document.querySelector(".barras");

function atualizarPerfis() {

    const gap = parseFloat(getComputedStyle(perfis).columnGap) || 0;
    const passo = todosPerfis[0].offsetWidth + gap;

    // quantos perfis cabem na janela agora (4 no desktop, 2 no tablet, 1 no celular)
    perfisPorPagina = Math.max(
        1,
        Math.round((janelaPerfis.offsetWidth + gap) / passo)
    );

    totalPaginasPerfil = Math.ceil(todosPerfis.length / perfisPorPagina);

    if (indexPerfil > totalPaginasPerfil - 1) {
        indexPerfil = totalPaginasPerfil - 1;
    }

    // recria as barrinhas
    barrasContainer.innerHTML = "";

    for (let i = 0; i < totalPaginasPerfil; i++) {
        const barra = document.createElement("div");
        barra.classList.add("barra");

        if (i === indexPerfil) {
            barra.classList.add("ativo");
        }

        barrasContainer.appendChild(barra);
    }

    const maximo = Math.max(0, perfis.offsetWidth - janelaPerfis.offsetWidth);
    const deslocamento = Math.min(indexPerfil * perfisPorPagina * passo, maximo);

    perfis.style.transform = `translateX(-${deslocamento}px)`;
}

function proximoPerfil() {

    if (indexPerfil < totalPaginasPerfil - 1) {
        indexPerfil++;
        atualizarPerfis();
    }
}

function anteriorPerfil() {

    if (indexPerfil > 0) {
        indexPerfil--;
        atualizarPerfis();
    }
}

atualizarPerfis();


// =========================
// RECALCULA AO REDIMENSIONAR / GIRAR A TELA
// =========================

window.addEventListener("resize", () => {
    atualizarCarrossel();
    atualizarCards();
    atualizarPerfis();
});


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

        SetaEsquerdaAvaliacao.src="img/setaesquerdadia.png";
        SetaDireitaAvaliacao.src="img/setadireitadia.png";

        
     


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