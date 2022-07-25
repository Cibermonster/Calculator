
const button = document.querySelectorAll("button");
const s2 = document.getElementById("s2");

function number(e) {
    if (e) { console.log(e.keyCode); }
    
    x = this.id
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
            if (s2.innerHTML.length >= 23) {
                console.log("Too Long!");
                return;
            }
            s2.innerHTML += x;
            break;
        case 'clr':
            s2.innerHTML = "";
            break;
        case 'del':
            s2.innerHTML = s2.innerHTML.slice(0,-1);
            break;
        case 'add':
            
            break;

    }
    
    //console.log("Len"+s2.innerHTML .length);
}

function add(x, y) {
    return x + y;
}


button.forEach(button => button.addEventListener('click', number))
document.addEventListener('keydown', function(event) {
console.log(event.keyCode)
}, true);