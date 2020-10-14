const minValue = 1;
const maxValue = 6;

// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
var dado1 = Math.floor(Math.random() * (maxValue - minValue)) + minValue
console.log('il valore del primo dado é: ' + dado1);

// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
var dado2 = Math.floor(Math.random() * (maxValue - minValue)) + minValue
console.log('il valore del secondo dado é: ' + dado2);

// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.
if(dado1 > dado2) {
    console.log("Il vincitore é il lanciatore del primo dado");
} else if(dado1 < dado2) {
    console.log("Il vincitore é il lanciatore del secondo dado");
} else {
    console.log("Pareggio! Ricaricare la pagina per riprovare...");
}
