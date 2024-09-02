//creo i numeri casuali e un array che li contenga
function getRandomNumbers(min, max, tot) {
    let numbers = [];
    while (numbers.length < tot) {
        const randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumbers)) numbers.push(randomNumbers);
    }
    return numbers;
}

//creo contenitori per i numeri dell'array da inserire in pagina
function createElement(elements, numbers) {
    let page = '';
    let cell;
    for (let i = 0; i < numbers.length; i++) {
        if (elements === `span`) {
            cell = `<${elements}> ${numbers[i]} </${elements}>`;
        } else {
            cell = `<${elements} type="number">`
        }
        page += cell;
    }

    return page;

}