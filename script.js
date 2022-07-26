
const button = document.querySelectorAll("button");
const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
var lastOp = "";

function reset() {
    s1.innerHTML = "";
    s2.innerHTML = "0";
}

function number(e) {
    x = (e.key === undefined) ? this.id : e.key; // Check input type
    
    switch(x) {
        case '0':
            if (s2.innerHTML == "0") { break; } // Enough 0's
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (s2.innerHTML == "0") { s2.innerHTML = ""; }
            if (s2.innerHTML.length > 16) { break; } // Too Long
            if (s1.innerHTML.slice(-1) == "=") {
                reset();
            }
            s2.innerHTML += x;
            break;
        case '.':
            if (s2.innerHTML.indexOf('.') == -1) { s2.innerHTML += "."; } // Check for existing decimal
            break;
        case 'Delete':
            reset();
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
            if (s2.innerHTML == "") { s2.innerHTML = "0"; } // No input defaults to 0
            s1.innerHTML = s2.innerHTML + " " + x;
            s2.innerHTML = "0";
            break;
        case 'Enter':
            //removeClasses();
        case 'sqr':
            s1.innerHTML = s2.innerHTML+"&#178; =";
            s2.innerHTML = parseFloat(s2.innerHTML)*parseFloat(s2.innerHTML)
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
            z = x + y;
            break;
        case '-':
            z = x - y;
            break;
        case '*':
            z = x * y;
            break;
        case '/':
            z = x / y;
            break;
    }
    s1.innerHTML = x+" "+op+" "+y+" =";
    s2.innerHTML = z;
}

button.forEach(button => button.addEventListener('click', number))
document.addEventListener('keydown',  event => number(event));
reset();

/*function removeClasses() {
    button.forEach((btn) => {
      btn.classList.remove("selected");
    });
  }*/
  