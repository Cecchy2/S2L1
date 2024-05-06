/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA


Datatype Primitivi sono dei valori che possiamo dare alle variabili, possono essere:
1. Stringhe: rappresentano  dati di testo e sono racchiusi tra apici (doppi o singoli).
2. Numeri: sono dati numerici, possono essere interi o decimali.
3. Booleani: sono 2 tipi di dati e rappresentano i valori di vero o falso.
Altri Datatype speciali sono:
4. Null: è un dato speciale rappresenta un non valore
5. Undefined: anche questo è un dato speciale e rappresenta un non definito
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myName= "Dario"

console.log(myName)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1= 12
const num2= 20
const somma= num1 +num2 

console.log(num1 +num2)

/* oppure */

console.log(12 + 20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x= 12

console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* myName= cecchinato
console.log(myName) */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log( 4- x)

/* oppure */
const y= 4

console.log(y-x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1= "john"
const name2="John"

console.log(name1!== name2)
console.log(name1=== name2)

console.log(name1.toLocaleLowerCase===name2.toLocaleLowerCase)







