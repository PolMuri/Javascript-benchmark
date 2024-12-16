/*Creem un arxiu que és un worker que s'executarà fora del fil principal i podrà tant rebre com enviar missatge de tornada en base a events del nostre programa ja que Javascript
 és mono fil i colapsa i triga en calcular les operacions per segon deixant la pàgina web sense poder fer res mentre calcula i quedant molt lleig. */

 // Cada vegada que rebi un event podrà fer el que volem nostalres i que al cap d'una estona respongui
 // Per utilitzar el worker l'hem d'importar a la nostra pàgina web
 onmessage = async event => {
    // Passem les 3 variables que necessitem per l'event, les agafem de l'event.data
    const {code, data, duration} = event.data

    // Posem aquest codi al worker perquè així no bloqueji el fil principal de javascript ja que mentre va el run test no aniria aquest codi si el tinguéssim a l'index.html
    let result
    try {
    /* Ara calculem quantes operacions fa i hem de saber en quin punt ha d'acabar de comptar les operacions que fa
    Executem el codi dins una eval, tot el codi serà en el client, no l'injectem a cap BD ni res, per tant l'eval aquí no és perillosa
    Perquè qui provi codi no tingui accés la context de fora i per si es asincron el codi
    ho embolcallarem tot en una funció asincrona i ho autoexecutem
    L'eval ens permet evaluar una cadena de text i l'executa com si fos codi JS, però és perillós perquè es podria permetre que un usuari guardi codi a una BD 
    i que estigui injectant codi. En aquest cas és en el client per tant no és perillós*/
    result = await eval(`(async () => { 
        // Perquè no colisioni amb el que injectem a data, posem aquests noms de variables
        let PERF__ops = 0;
        let PERF__start = Date.now(); // El Date.now ens el dona en milisegons 
        let PERF__end = Date.now() + ${duration};
        // Aquí injectem la data que ha d'estar fóra del bucle
        ${data};

      while (Date.now() < PERF__end) {
        // Comptarem cada una de les operacions del codi que executi en un segon
        ${code};
        PERF__ops++
        }
        return PERF__ops
    })()`) // Això s'anomena IIFE -> Inmediately Invoked Function Expression que és crear una funció i executar-la al invocar-la
    } catch (error) {

    }

    // Per saber quantes operacions hem fet per segon return result * (1000 / duration), però com que 1000 és 1 segon retornem el resultat
    //Tornem el resultat enviant-lo com un missatge
    postMessage(result);

 }