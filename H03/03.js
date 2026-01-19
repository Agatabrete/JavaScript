// Agata Brete Jõpiselg IT-23 16.01/2026

// Sõidu kaugus kilomeetrites
let kaugus = 150;

// Kiirus kilomeetrites tunnis
let kiirus = 75;

// Sõidu aeg tundides (aeg = kaugus / kiirus)
let soiduAeg = kaugus / kiirus;

// Kuvame tulemuse konsooli
console.log("Sõidu aeg on:", soiduAeg, "tundi");

// Postituste kuvamine

// Postituste koguarv
let postitusiKokku = 137;

// Maksimaalne postituste arv lehel
let postitusiLehel = 10;

// Lehekülgede arv (ümardame ülespoole)
let lehekulgi = Math.ceil(postitusiKokku / postitusiLehel);

// Postituste arv viimasel lehel
let viimaselLehel = postitusiKokku % postitusiLehel;
if (viimaselLehel === 0) {
    viimaselLehel = postitusiLehel;
}

// Kuvame tulemused konsooli
console.log("Lehekülgi on vaja:", lehekulgi);
console.log("Postitusi viimasel lehel:", viimaselLehel);


// Serveri töökulu

// Serveri võimsus vattides
let voimsusW = 400;

// Elektri hind eurodes kWh kohta (9.69 senti = 0.0969 eurot)
let elektriHind = 0.0969;

// Serveri voolutarbimine kWh ühe tunni jooksul
let tarbiminekWh = voimsusW / 1000;

// Serveri töökulu ühe tunni jooksul eurodes
let tookulu = tarbiminekWh * elektriHind;

// Kuvame tulemuse konsooli
console.log("Serveri töökulu ühe tunni jooksul on:", tookulu.toFixed(4), "eurot");