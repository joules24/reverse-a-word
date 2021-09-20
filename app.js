const form = document.querySelector('form')
const container = document.querySelector('#atilas-container')
const input = document.querySelector('input');
const submit = document.querySelector('#submit');
const resetButton = document.querySelector('#reset');
let arr = []

const datkilab = () => {
    const word = input.value.split("");
    const reverseArr = word.reverse();
    const reversedWord = reverseArr.join('');
    return reversedWord.toLowerCase();
}


const appendToDom = (e) => {
    e.preventDefault()
    if (input.value === ''){
        alert("Please type a word")
    } else {
        const p = document.createElement('p');
        const word = datkilab()
        p.append(word)
        p.setAttribute('class', 'atilas')
        container.append(p)
        arr.push(word)
        console.log(arr)
        submit.disabled = true;
        input.disabled = true;
        input.style.backgroundColor = black;
    }
}

const reset = (e) => {
    e.preventDefault()
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    arr.length = 0;
    submit.disabled = false;
    input.value = "";
    input.disabled = false;
}


submit.addEventListener('click', appendToDom);

resetButton.addEventListener('click', reset);