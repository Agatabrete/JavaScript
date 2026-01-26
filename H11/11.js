//agata Brete Jõpiselg IT-23 26.01/2026


// NIMED
const nimed = [
  "mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas",
  "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas",
  "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene",
  "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"
];

// kõik nimed suure algustähega
let parandatudNimed = nimed.map(nimi =>
  nimi
    .toLowerCase()
    .split(" ")
    .map(osa => osa.charAt(0).toUpperCase() + osa.slice(1))
    .join(" ")
);

console.log("Parandatud nimed:");
parandatudNimed.forEach(nimi => console.log(nimi));

// emailid perenimede järgi
let emailid = parandatudNimed.map(nimi => {
  let perenimi = nimi.split(" ")[1].toLowerCase();
  return `${perenimi}@metshein.com`;
});

console.log("\nEmailid:");
emailid.forEach(email => console.log(email));

// nime otsimise funktsioon
function otsiNimi(otsitav) {
  let leitud = parandatudNimed.filter(nimi =>
    nimi.toLowerCase().includes(otsitav.toLowerCase())
  );

  if (leitud.length > 0) {
    console.log(`Leiti järgmised nimed:`);
    leitud.forEach(nimi => console.log(nimi));
  } else {
    console.log("Sellist nime ei leitud.");
  }
}

otsiNimi("kask");


// SÜNNIAEG JA VANUS
const inimesteAndmed = [
  { nimi: "Mari Maasikas", isikukood: "38705123568" },
  { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
  { nimi: "Kristiina Kukk", isikukood: "39203029876" },
  { nimi: "Margus Mustikas", isikukood: "49807010346" },
  { nimi: "Jaak Järve", isikukood: "39504234985" },
  { nimi: "Kadi Kask", isikukood: "39811136789" },
  { nimi: "Mario Mets", isikukood: "50101019999" }
];

function leiaSynniaegJaVanus(inimene) {
  let kood = inimene.isikukood;
  let sajand;

  if (kood[0] === "3" || kood[0] === "4") sajand = 1900;
  else if (kood[0] === "5" || kood[0] === "6") sajand = 2000;

  let aasta = sajand + parseInt(kood.substring(1, 3));
  let kuu = parseInt(kood.substring(3, 5)) - 1;
  let paev = parseInt(kood.substring(5, 7));

  let synniaeg = new Date(aasta, kuu, paev);
  let tana = new Date();

  let vanus = tana.getFullYear() - synniaeg.getFullYear();
  let m = tana.getMonth() - synniaeg.getMonth();
  if (m < 0 || (m === 0 && tana.getDate() < synniaeg.getDate())) {
    vanus--;
  }

  return {
    synniaeg: synniaeg.toLocaleDateString("et-EE"),
    vanus: vanus
  };
}

console.log("\nSünniajad ja vanused:");
inimesteAndmed.forEach(inimene => {
  let andmed = leiaSynniaegJaVanus(inimene);
  console.log(`${inimene.nimi} on sündinud ${andmed.synniaeg} ja on ${andmed.vanus} aastat vana.`);
});


// KAUGUSHÜPE
const opilased = [
  { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
  { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
  { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
  { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
  { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
  { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
  { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
  { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
  { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
  { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

console.log("\nKaugushüppe tulemused:");

opilased.forEach(opilane => {
  let parim = Math.max(...opilane.tulemused);

  let summa = opilane.tulemused.reduce((a, b) => a + b, 0);
  let keskmine = (summa / opilane.tulemused.length).toFixed(2);

  console.log(
    `${opilane.nimi} parim tulemus on ${parim} m ja keskmine tulemus on ${keskmine} m.`
  );
});
