//prendere l'email dal html e controllare se è allowed

//get submit dal html
const submit = document.querySelector('button[type="submit"]');
//stampo il valore del email al click
submit.addEventListener("click", function () {
  //prendo il valore del email nel html
  const email = document.getElementById("email").value;

  //stampo email
  console.log(email);

  //creo array per validare le informazioni in seguito
  const emailValidator = [
    "sebastian.balint02@gmail.com",
    "asd@gmail.com",
    "asdruzio@gmail.com",
    "asdrubale@gmail.com",
  ];

  //creo variabile per non stampare per ogni iterazione un nuovo valore
  let allowed = false;

  //creo ciclo for per permettermi ad ogni iterazione di controllare se l email inserita è uguale ad uno dei valori contenuti nell'array,

  //  lo rendo possibile settando variabile "i" che tiene conto del indice (indica posizione dentro array) minore della length del array perchè la length del array è di 3, ma partendo da zero avremmo 4 ripetizioni del ciclo, dato che ci sono solo 3 elementi e le posizioni nel array iniziano dal numero 0, il massimo che ci serve sarà sempre uno in meno rispetto al numero di elementi nel array

  for (let i = 0; i < emailValidator.length; i++) {
    // confronta l'email inserita dall'utente con ogni email nell'array
    // come detto prima la i in questo caso rappresenta il numero al interno del array, siccome la i viene incrementata ad ogni ripetizione del ciclo, la posizione che viene controllata al interno del array viene incrementata di uno ogni volta e viene rieseguito il controllo rispetto alla nuova posizione
    if (email === emailValidator[i]) {
      allowed = true; // se trova una corrispondenza cambia allowed a true
    }
  }

  //se allowed è stato cambiato sopra significa che ora questa condizione rende possibile controllare il valore che è risultato dal operazione svolta dal ciclo for, perciò ora è possibile confrontare i valori, se allowed è true allora stampa allowed sennò stampa not allowed
  if (allowed === true) {
    console.log("allowed");
  } else if (allowed === false) {
    console.log("not allowed");
  }
});
