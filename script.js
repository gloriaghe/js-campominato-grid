// chiedere a utente livello di difficoltà
const livelloScelto = prompt("Scegli un livello da 1 a 3");

// funzione numeri random
let randommynum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;



// funzione genera numeri da 1 a tot tutti diversi
function creaRandomNum(maxRange, min, max) {
    const arreyInt = [];
    while (arreyInt.length < maxRange){
        let RandomNumInt = randommynum(min, max);
        if (!arreyInt.includes(RandomNumInt)){
            arreyInt.push(RandomNumInt);
        }
    }
    return arreyInt;
} 
// creare blocchetti tramite js

// aggiungere classi ai blocchetti

// aggiungere numeri ai blocchetti