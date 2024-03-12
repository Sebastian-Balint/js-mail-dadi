//Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//quando il giocatore preme gioca ==> generare due dati random
const gioca = document.querySelector('button[type="submit"]');
gioca.addEventListener("click", function () {
  gioca.append = "asdrubale";

  const randomUser = parseInt(Math.random() * 6) + 1;

  const randomPc = parseInt(Math.random() * 6) + 1;

  if (randomUser > randomPc) {
    console.log(randomUser, ">", randomPc + " you win");
  } else if (randomUser < randomPc) {
    console.log(randomUser, "<", randomPc + " you lose");
  } else {
    console.log(randomUser, "=", randomPc + " draw");
  }
});
//creati due dati random dobbiamo confrontare quale dei numeri è più alto

//se numero giocatore > numero pc stampare vittoria

//se numero giocatore < numero pc stampare sconfitta

//se numero giocatore = numero pc stampare pareggio
