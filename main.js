const minValue = 1;
const maxValue = 6;
var dadi = [];

// Generare 2 numeri casuali tra 1 e 6 per simulare il lancio di 2 dadi.
for (var i = 0; i < 2; i++) {
    dadi.push(Math.floor(Math.random() * (maxValue - minValue)) + minValue);
    console.log(dadi[i]);
}

// Stampa dei numeri generati.
document.getElementById('roll-datap1').innerHTML = dadi[0];
document.getElementById('roll-datap2').innerHTML = dadi[1];

// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.
if(dadi[0] > dadi[1]) {
    document.getElementById('vincitore').innerHTML = "Il vincitore é il lanciatore del primo dado";
} else if(dadi[0] < dadi[1]) {
    document.getElementById('vincitore').innerHTML = "Il vincitore é il lanciatore del secondo dado";
} else {
    document.getElementById('vincitore').innerHTML = "Pareggio! Ricaricare la pagina per riprovare...";
}
