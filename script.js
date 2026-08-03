
/* ================================= */
/* CONFIGURACIÓN */
/* ================================= */


const passwordCorrecta = "amor";





/* ================================= */
/* ELEMENTOS */
/* ================================= */


const passwordSection =document.getElementById("password-section");


const welcomeSection =document.getElementById("welcome-section");


const storySection =document.getElementById("story-section");



const passwordInput =document.getElementById("password-input");


const passwordBtn =document.getElementById("password-btn");


const errorMessage =document.getElementById("error-message");



const beginBtn =document.getElementById("begin-btn");



const envelopeArea =document.getElementById("envelope-area");


const letterArea =document.getElementById("letter-area");


const bookArea =document.getElementById("book-area");


const galleryArea =document.getElementById("gallery-area");



const openEnvelope =document.getElementById("open-envelope");


const letterContent =document.getElementById("letter-content");


const goBook =document.getElementById("go-book");


const nextPage =document.getElementById("next-page");



const chapterTitle =document.getElementById("chapter-title");


const chapterText = document.getElementById("chapter-text");

const chapter1 = `
Desde el momento en que llegaste a mi vida,
todo empezó a ser diferente.

Cada sonrisa, cada conversación y cada momento contigo
se convirtió en un recuerdo que quiero guardar siempre.

Estos 67 días juntos han sido solo el comienzo
de una historia que espero seguir escribiendo contigo ❤️
`;

let indexChapter = 0;

function writeChapter1(){

    if(indexChapter < chapter1.length){

        chapterText.innerHTML += chapter1.charAt(indexChapter);
        indexChapter++;

        setTimeout(writeChapter1, 50);

    }

}

const music =document.getElementById("music");


/* ================================= */
/* CAMBIO DE ELEMENTOS */
/* ================================= */


function mostrar(elemento){

    if(elemento){
        elemento.classList.remove("hidden");
        elemento.classList.add("show");
    }

}


function ocultar(elemento){

    if(elemento){
        elemento.classList.add("hidden");
    }

}







/* ================================= */
/* CONTRASEÑA */
/* ================================= */


passwordBtn.addEventListener("click",()=>{





    const password =passwordInput.value.toLowerCase();



    if(password === passwordCorrecta){


        ocultar(passwordSection);


        mostrar(welcomeSection);



        music.play().catch(()=>{});


    }

    else{


        errorMessage.textContent =
        "Esa no es la palabra ❤️";


    }


});








/* ================================= */
/* BIENVENIDA */
/* ================================= */


beginBtn.addEventListener("click",()=>{


    ocultar(welcomeSection);


    mostrar(storySection);


});








/* ================================= */
/* SOBRE */
/* ================================= */


openEnvelope.addEventListener("click",()=>{

    envelopeArea.classList.add("hide");

    setTimeout(()=>{

        ocultar(envelopeArea);
        mostrar(letterArea);

        const letter = document.getElementById("letter");

        if(letter){
            letter.classList.add("show-letter");
        }
    }, 300);

});


/* ================================= */
/* CARTA */
/* ================================= */


const carta = `

Sofía ❤️


Quiero que sepas que esta sorpresa
la hice pensando en ti.


Estos 67 días han estado llenos de
momentos que significan mucho para mí.


Gracias por cada sonrisa, cada conversación
y cada instante que hemos compartido.


Me gusta la persona que eres y lo feliz
que me haces cuando estoy contigo.


Espero que sigamos creando muchos recuerdos
y escribiendo nuestra historia juntos.


Con mucho cariño ❤️

Santiago


`;



let posicionCarta = 0;



function escribirCarta(){


    letterContent.innerHTML="";


    posicionCarta=0;


    const escribir=setInterval(()=>{


        letterContent.innerHTML +=
        carta[posicionCarta];


        posicionCarta++;



        if(posicionCarta >= carta.length){


            clearInterval(escribir);


        }



    },45);



}









/* ================================= */
/* LIBRO */
/* ================================= */


goBook.addEventListener("click",()=>{


    ocultar(letterArea);


    mostrar(bookArea);


    cargarPagina();


});





let pagina = 0;



const paginas=[


{

titulo:"Capítulo 1 ❤️",

texto:`

El comienzo de nuestra historia.

Un momento que poco a poco se convirtió
en algo especial.

`,

},


{

titulo:"Capítulo 2 ✨",

texto:`

67 días de recuerdos, risas y momentos
que quiero guardar siempre.

`

},


{
    titulo:"Capítulo 3 💕",

    texto:`

Gracias por llegar a mi vida y hacer
cada día un poco más bonito.

`
}


];






function cargarPagina(){


    chapterTitle.textContent =
    paginas[pagina].titulo;


    chapterText.textContent =
    paginas[pagina].texto;


}





nextPage.addEventListener("click",()=>{


    pagina++;


    if(pagina < paginas.length){


        cargarPagina();


    }

    else{


        ocultar(bookArea);


        mostrar(galleryArea);


    }



});








/* ================================= */
/* FINAL */
/* ================================= */

const finalButton = document.getElementById("final-button");
const finalArea = document.getElementById("final-area");

finalButton.addEventListener("click", () => {

    ocultar(galleryArea);

    if (finalArea) {
        finalArea.classList.remove("hidden");
        finalArea.classList.add("show");
    }

    const storyBook = document.querySelector(".story-book");
    const finalSection = document.querySelector(".final-surprise");

    if (storyBook) {
        storyBook.classList.add("hide");
    }

    if (finalSection) {
        finalSection.classList.add("show");
    }

});
window.addEventListener("load", () => {
    writeChapter1();
});