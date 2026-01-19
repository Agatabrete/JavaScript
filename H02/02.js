// Agata Brete Jõpiselg IT-23 16.01/2026

let tunnid = 2;
let minutid = 38;
let sekundid = 59;
let kellaaeg = tunnid + ":" + minutid + ":" + sekundid + "PM";
console.log(kellaaeg);

let tsitaat = '“The only limit to our realization of tomorrow is our doubts of today.”';
let autor = "Franklin D. Roosevelt";
let tsitaadiLause = `${tsitaat} – ütles ${autor}.`;
console.log(tsitaadiLause);

let eesnimi = "Jüri";
let perenimi = "Jurakas";
let eesnimiEsitäht = eesnimi[0];
let perenimiEsitäht = perenimi[0];
let nimetähed = `${eesnimi} ${perenimi} nimetähed on ${eesnimiEsitäht}.${perenimiEsitäht}.`;
console.log(nimetähed);

let nimi = "Jurakas, Jüri";
let komaIndex = nimi.indexOf(",");
console.log(komaIndex);
let perenimiEraldatud = nimi.substring(0, komaIndex);
let perenimiSuured = perenimiEraldatud.toUpperCase();
console.log(perenimiSuured);
console.log(perenimiEraldatud.length);

let epost = "karrolk@netlog.com";
let muudetudEpost = epost.replace("netlog", "gmail");
console.log(muudetudEpost);

let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let andmed = andmerida.split(",");
let email = andmed[3];
let ip = andmed[5];
let kasutajanimi = email.split("@")[0];
console.log(ip);
console.log(kasutajanimi);
