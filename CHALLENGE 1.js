function isEvenRegular (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const number = 10;

const isEvenRegularResult = isEvenRegular(number);

console.log(`${number} es par usando Funcion Regular ${isEvenRegularResult}`)


const isEvenArrow = (num) => num % 2 === 0;

const isEvenArrowResult = isEvenArrow(number);

console.log(`${number} es par usando Funcion de Flecha ${isEvenRegularResult}`)

// (CODIGO CON AYUDA DE CHAT GPT COMO REFERENCIA) La primer diferencia que noté es el recorte de lineas de codigo a nivel de sintaxis al no necesitar usar la condicional if-else y su return. Directamente la "flecha" marca la función y su resultado de acuerdo al valor. Lo otro es el tema del this que me lo explicó el Chat GPT en donde muestra que la forma de flecha no viene con su propio contexto de this. Donde por ejemplo si yo tengo un objeto Moto con hijo Modelo y en una funcion de flecha quiero llamar al Modelo, el this no me permitira llamarlo porque el this toma todo el contexto, es decir, desde Moto. Y al estar en { }  esta funcion pues lanzará error.

// Prompts: What's the difference between Arrow Function
