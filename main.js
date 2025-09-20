// constants
const currency = "usd";       // валюта (малими літерами!)
const date_from = "20220707"; // початкова дата
const date_to = "20220719";   // кінцева дата

// базовий URL
const { URL } = require("url");
const url = new URL("https://bank.gov.ua/NBU_Exchange/exchange_site");

// додаємо параметри
url.searchParams.set("start", date_from);
url.searchParams.set("end", date_to);
url.searchParams.set("valcode", currency);
url.searchParams.set("sort", "exchangedate");
url.searchParams.set("order", "desc");
url.searchParams.set("json", "");

// виводимо у консоль
console.log(url.toString());

