fetch("https://api.exchangerate-api.com/v4/latest/usd")
.then(x => x.json())
.then(y => megjelenit(y));



