const minValue = 1;
const maxValue = 6;

//creazione array di 2 dimensioni vuoto incui la prima riga é dedicata al player 1 e la seconda al player 2
var dadi = [[], []];

// Creazione array che conterrá la somma delle righe dell'array dadi
var sommaLanci = [0, 0]

// raccolta input del numero di lanci
var rollDiceNumber = prompt("Quanti lanci per giocatore?")

// generare n lanci di dati per ogni giocatore ed inserirli nell'array dadi,
// mentre la somma dei lanci di ogni player va inserita nell'array sommalanci
for (var i = 0; i < 2; i++) {
    // La variabile i controlla il player (riga dell'array dadi e elemento di sommaLanci)
    for (var j = 0; j < rollDiceNumber; j++) {
        //la variabile j controlla il singolo lancio del dado (la colonna dell'array dadi)
        dadi[i].push(Math.floor(Math.random() * (maxValue + 1 - minValue)) + minValue);
        // Faccio un somma del numero nella posizione attuale (dadi[i][j]) con la somma dei lanci del player i fino ad adesso (sommaLanci[i])
        sommaLanci[i] = sommaLanci[i] + dadi[i][j];
    }
    // Stampa nell'elemento adatto  la riga (tutti i lanci) di ogni giocatore
    document.getElementById('roll-datap' + (i + 1)).innerHTML = dadi[i];
}
console.log(sommaLanci);

// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.
if(sommaLanci[0] > sommaLanci[1]) {
    document.getElementById('vincitore').innerHTML = "Il vincitore é il lanciatore del primo dado";
} else if(sommaLanci[0] < sommaLanci[1]) {
    document.getElementById('vincitore').innerHTML = "Il vincitore é il lanciatore del secondo dado";
} else {
    document.getElementById('vincitore').innerHTML = "Pareggio! Ricaricare la pagina per riprovare...";
}
