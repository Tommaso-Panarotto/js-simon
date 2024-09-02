/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
const timer = document.getElementById('timer');
const form = document.getElementById('form');
const tryNumbers = document.getElementById('try');
const numbers = document.getElementById('numbers');
const instructions = document.getElementById('instruction');
const confirm = document.getElementById('button');
const inputs = form.querySelectorAll('input');
const message = document.querySelector('.message');

//Impostazioni
const min = 1;
const max = 100;
const totalNumbers = 5;
let timerCount = 3;

//FASE DI ELABORAZIONE
const randomNumbers = getRandomNumbers(min, max, totalNumbers);
console.table(randomNumbers);

const span = `span`;


numbers.innerHTML = createElement(span, randomNumbers);

const interval = setInterval(() => {
    timer.innerText = --timerCount;
    if (!timerCount) {
        clearInterval(interval);
        timer.innerText = 'TRY!';
        form.className = 'd-block';
        numbers.classList.add('d-none');
        instructions.innerText = `Inserisci tutti i numeri che ricordi (l'ordine non è importante)`;
    }
}, 1000);

form.addEventListener('submit', event => {
    //! Blocco l'invio
    event.preventDefault();

    //svuoto gli elementi
    message.innerText = '';

    //raccolgo i dati inseriti
    const userGuess = [];

    for (let input of inputs) {

        const value = parseInt(input.value);

        //Verifica
        if (!isNaN(value) && value >= min && value <= max) {
            userGuess.push(value);
        }

        //controllo numerri
        const correctNumbers = [];
        for (let guess of userGuess) {
            if (randomNumbers.includes(guess)) correctNumbers.push(guess);
        }

        //OutPut
        message.innerText = `hai indovinato ${correctNumbers.length} i cui numeri sono:${correctNumbers}`


    }

    console.table(userGuess);


})