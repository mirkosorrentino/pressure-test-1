// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let total = 0;
for (let i = 0; i <= 2; i++) {
    let userNumber = parseInt(prompt("Dammi un numero"));
    total = total + userNumber;
}

console.log(total);