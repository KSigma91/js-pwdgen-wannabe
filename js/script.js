// dichiarazione
const nome = prompt("Qual è il tuo nome?");
const cognome = prompt("Qual è il tuo cognome?");
const colore = prompt("Qual è il tuo colore preferito?");

// assegnazione
document.getElementById("mio_id").innerHTML = `Salve ${nome + cognome + colore}`;

console.log(
    `
        ${nome} ${cognome}
    `
)