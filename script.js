function oiai(){
    var a = document.createElement("div")
    a.setAttribute("id", "btn-div")
    document.body.appendChild(a)

    var d = document.createElement("input")
    d.setAttribute("type", "button")
    d.setAttribute("class", "btn-click")
    d.setAttribute("value", "Эй!")
    document.getElementById("btn-div").appendChild(d)

    var r = fade(d)
}

function fade(d) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            d.style.display = 'none';
        }
        d.style.opacity = op;
        d.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}