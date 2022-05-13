

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
const createmyElement = (elemAggiuto, classAggiuta) => {
    const node = document.createElement(elemAggiuto);
    node.className = classAggiuta;
    return node;
}

const inputUser = document.querySelector("input");
const InizaGioco = document.querySelector("button");
const GridPagina = document.getElementById("grid");


InizaGioco.addEventListener("click",
    function() {

        inpuntUserParseInt = parseInt(inputUser.value)

        if (1 === inpuntUserParseInt) {
            for (let i = 0; i < 100; i++){
              const crea100 =  createmyElement("div", "square1 square");
              const numrandom100 = creaRandomNum(100, 1, 100);
              crea100.append(numrandom100[i]);
              grid.append(crea100);
            }
        } else if (inpuntUserParseInt == 2){
            for (let i = 0; i < 81; i++){
                const crea81 = createmyElement("div", "square2 square")
                const numrandom81 = creaRandomNum(81, 1, 81);
                crea81.append(numrandom81[i]);
                grid.append(crea81)
            }
        } else if (inpuntUserParseInt == 3){
            for (let i = 0; i < 49; i++){
                const crea49 =  createmyElement("div", "square3 square")
                const numrandom49 = creaRandomNum(49, 1, 49);
                crea49.append(numrandom49[i]);
                grid.append(crea49)
 
            }
        }


    }

)

// aggiungere classi ai blocchetti

// aggiungere numeri ai blocchetti