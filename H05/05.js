// Agata Brete Jõpiselg IT-23 17.01/2026

// Temperatuur
let temperatuur = 18;

if (temperatuur > 25) {
  console.log("Väga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
  console.log("Mõnus temperatuur");
} else {
  console.log("Jahe ilm");
}


// Kasutajanime kontroll (lühendatud IF ehk ternary)
let kasutajanimi = "admin";

console.log(
  kasutajanimi === "admin"
    ? "Tere, administraator!"
    : "Tere, külaline!"
);


// Ürituse piletite hind
let piletityyp = "taispilet"; // "taispilet" või "sooduspilet"
let vanus = 17;
let hind;

if (piletityyp === "taispilet") {
  if (vanus < 18) {
    hind = 10;
  } else if (vanus <= 64) {
    hind = 20;
  } else {
    hind = 15;
  }
} else if (piletityyp === "sooduspilet") {
  if (vanus < 18 || vanus >= 65) {
    hind = 8;
  } else {
    hind = 15;
  }
}

console.log(`Pileti hind on ${hind} eurot.`);