
const button = document.querySelectorAll("button");
const s2 = document.getElementById("s2");

function number() {
    //max len 23
    x = this.id
    if (s2.innerHTML.length >= 23) {
        console.log("Too Long!");
        return;
    }
    s2.innerHTML += x;
    console.log("Len"+s2.innerHTML .length);
}




button.forEach(button => button.addEventListener('click', number))
