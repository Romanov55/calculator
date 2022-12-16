function plus (){
    const operator = '+';
    let str = document.getElementById('result').innerHTML
    if (str.slice(-1) === '+' || str.slice(-1) === '-' || str.slice(-1) === '*' || str.slice(-1) === '÷') {
        document.getElementById('result').innerHTML = `${str.slice(0,-1)}${operator}`
    } else if (str.slice(-1) !== ',' && str.length < 19) {
        document.getElementById('result').innerHTML += operator;
    }
}

function minus (){
    const operator = '-';
    let str = document.getElementById('result').innerHTML
    if (str.slice(-1) === '+' || str.slice(-1) === '-' || str.slice(-1) === '*' || str.slice(-1) === '÷') {
        document.getElementById('result').innerHTML = `${str.slice(0,-1)}${operator}`
    } else if (str.slice(-1) !== ',' && str.length < 19) {
        document.getElementById('result').innerHTML += operator;
    }
}

function division (){
    const operator = '/';
    let str = document.getElementById('result').innerHTML
    if (str.slice(-1) === '+' || str.slice(-1) === '-' || str.slice(-1) === '*' || str.slice(-1) === '÷') {
        document.getElementById('result').innerHTML = `${str.slice(0,-1)}${operator}`
    } else if (str.slice(-1) !== ',' && str.length < 19) {
        document.getElementById('result').innerHTML += operator;
    }
}

function multiply (){
    const operator = '*';
    let str = document.getElementById('result').innerHTML
    if (str.slice(-1) === '+' || str.slice(-1) === '-' || str.slice(-1) === '*' || str.slice(-1) === '÷') {
        document.getElementById('result').innerHTML = `${str.slice(0,-1)}${operator}`
    } else if (str.slice(-1) !== ',' && str.length < 19) {
        document.getElementById('result').innerHTML += operator;
    }
}

function del (){
    const operator = 0;
    document.getElementById('result').innerHTML = operator;
}

function cancel (){
    let str = document.getElementById('result').innerHTML;
    if (str.length === 1) {
        document.getElementById('result').innerHTML = '0';
    } else {
        document.getElementById('result').innerHTML = str.slice(0,-1);
    }
}

function comma (){
    const mark = '.';
    let str = document.getElementById('result').innerHTML;
    if (str.slice(-1) !== '+' && str.slice(-1) !== '-' && str.slice(-1) !== '*' && str.slice(-1) !== '÷') {
        document.getElementById('result').innerHTML += mark;
    }
}

function zero (){
    const num = 0;
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML !== '0') {
        document.getElementById('result').innerHTML += num;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML = num;
    }
}

function one (){
    const symbol = '1';
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML === '0') {
        document.getElementById('result').innerHTML = symbol;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML += symbol;
    }
}

function two (){
    const symbol = '2';
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML === '0') {
        document.getElementById('result').innerHTML = symbol;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML += symbol;
    }
}

function three (){
    const symbol = '3';
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML === '0') {
        document.getElementById('result').innerHTML = symbol;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML += symbol;
    }
}

function four (){
    const symbol = '4';
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML === '0') {
        document.getElementById('result').innerHTML = symbol;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML += symbol;
    }
}

function five (){
    const symbol = '5';
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML === '0') {
        document.getElementById('result').innerHTML = symbol;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML += symbol;
    }
}

function six (){
    const symbol = '6';
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML === '0') {
        document.getElementById('result').innerHTML = symbol;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML += symbol;
    }
}

function seven (){
    const symbol = '7';
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML === '0') {
        document.getElementById('result').innerHTML = symbol;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML += symbol;
    }
}

function eight (){
    const symbol = '8';
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML === '0') {
        document.getElementById('result').innerHTML = symbol;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML += symbol;
    }
}

function nine (){
    const symbol = '9';
    let str = document.getElementById('result').innerHTML;
    if (document.getElementById('result').innerHTML === '0') {
        document.getElementById('result').innerHTML = symbol;
    } else if (str.length < 20) {
        document.getElementById('result').innerHTML += symbol;
    }
}

function answer (){
    let str = document.getElementById('result').innerHTML;
    document.getElementById('small-result').innerHTML = eval(str)
    document.getElementById('result').innerHTML = eval('0')
}

function radical (){
    let str = document.getElementById('result').innerHTML;
    const res = str.split(/(\+|\-|\*|\÷)/)
    const begin = res.slice(0,-1).join('')
    document.getElementById('small-result').innerHTML = Math.sqrt(res[res.length-1])
    document.getElementById('result').innerHTML = `${begin}${Math.sqrt(res[res.length-1])}`
}
