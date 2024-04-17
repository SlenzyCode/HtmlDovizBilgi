fetch("https://api.exchangerate-api.com/v4/latest/EUR").then((response) => response.json()).then((data) => {
    document.getElementById("dolar").innerText = `Fiyat ${data.rates.TRY}`;
});

fetch("https://api.exchangerate-api.com/v4/latest/USD").then((response) => response.json()).then((data) => {
    document.getElementById("euro").innerText = `Fiyat ${data.rates.TRY}`;
});

fetch("https://api.exchangerate-api.com/v4/latest/GBP").then((response) => response.json()).then((data) => {
    document.getElementById("sterlin").innerText = `Fiyat ${data.rates.TRY}`;
});

fetch("https://api.exchangerate-api.com/v4/latest/CAD").then((response) => response.json()).then((data) => {
    document.getElementById("canada_dolar").innerText = `Fiyat ${data.rates.TRY}`;
});