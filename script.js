
const button = document.querySelectorAll("button");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
var lastOp = "";

function number(e) {
    if (e.key === undefined) { 
        x = this.id;
    } else {
        x = e.key; // KEYBOARD
    }
    
    switch(x) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':        
            if (s2.innerHTML.length > 16) {
                console.log("Too Long!");
                return;
            }
            s2.innerHTML += x;
            break;
        case '.':
            if (s2.innerHTML.indexOf('.') == -1) {
                s2.innerHTML += ".";
            }
            break;
        case 'Delete':
            s1.innerHTML = "";
            s2.innerHTML = "";
            break;
        case 'Backspace':
            s2.innerHTML = s2.innerHTML.slice(0,-1);
            break;
        case '+/-':
            s2.innerHTML *= -1;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            s1.innerHTML = s2.innerHTML + " " + x;
            s2.innerHTML = "";
            break;
        case '=':
            operate(s1.innerHTML, s2.innerHTML)
            break;

    }
}

function operate(x, y) {
    var op = x.slice(-1);
    var x = parseFloat(x.slice(0,-1));
    var y = parseFloat(y);
    
    op == "=" ? op = lastOp : lastOp = op // Use last operator if press =

    switch(op) {
        case '+':
            z = add(x, y);
            break;
        case '-':
            z = sub(x, y);
            break;
        case '*':
            z = mult(x, y);
            break;
        case '/':
            z = div(x, y);
            break;
    }
    s1.innerHTML = x+" "+op+" "+y+" =";
    s2.innerHTML = z;
}

function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mult(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}


button.forEach(button => button.addEventListener('click', number))
document.addEventListener('keydown',  event => number(event));