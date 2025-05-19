fetch("https://api.exchangerate-api.com/v4/latest/usd")
.then(x => x.json())
.then(y => megjelenitusd(y));

function megjelenitusd(y){
    console.log(y)
    document.getElementById("usd").innerHTML+=y.rates.HUF+"Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/eur")
.then(x => x.json())
.then(y => megjeleniteur(y));

function megjeleniteur(y){
    document.getElementById("eur").innerHTML+=y.rates.HUF+"Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/gbp")
.then(x => x.json())
.then(y => megjelenitgbp(y));

function megjelenitgbp(y){
    document.getElementById("gbp").innerHTML+=y.rates.HUF+"Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/ron")
.then(x => x.json())
.then(y => megjelenitron(y));

function megjelenitron(y){
    document.getElementById("ron").innerHTML+=y.rates.HUF+"Ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/sar")
.then(x => x.json())
.then(y => megjelenitsar(y));

function megjelenitsar(y){
    document.getElementById("sar").innerHTML+=y.rates.HUF+"Ft"
}