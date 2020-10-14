const minValue = 1;
const maxValue = 6;

// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
var dado1 = Math.floor(Math.random() * (maxValue - minValue)) + minValue
document.getElementById('roll-datap1').innerHTML = dado1;

// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
var dado2 = Math.floor(Math.random() * (maxValue - minValue)) + minValue
document.getElementById('roll-datap2').innerHTML = dado2;

// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.
if(dado1 > dado2) {
    document.getElementById('vincitore').innerHTML = "Il vincitore é il lanciatore del primo dado";
} else if(dado1 < dado2) {
    document.getElementById('vincitore').innerHTML = "Il vincitore é il lanciatore del secondo dado";
} else {
    document.getElementById('vincitore').innerHTML = "Pareggio! Ricaricare la pagina per riprovare...";
}
