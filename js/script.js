// pongo queste domande all'utente
const nome = prompt("Qual è il tuo nome?");
const cognome = prompt("Qual è il tuo cognome?");
const colore = prompt("Qual è il tuo colore preferito?");

/* questo genererà la password con i risultati della digitazione
da parte dell'utente
*/
document.getElementById("mio_id").innerHTML = `${nome + cognome + colore}21`;

console.log(
    `
        ${nome} ${cognome}
    `
)