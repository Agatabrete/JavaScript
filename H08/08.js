// Agata Brete Jõpiselg IT-23 18.01/2026

// Algne müntide massiiv
let mündid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

// Uus massiiv sorteeritud müntide jaoks
let sorteeritudMündid = [];

// Indeks while-tsükli jaoks
let i = 0;

// While-tsükkel, mis läbib kogu algmassiivi
while (i < mündid.length) {
    // Lisa iga münt uude massiivi
    sorteeritudMündid.push(mündid[i]);
    i++;
}

// Arvuta mitu münti meil on ja nende summa
let summa = 0;
let j = 0;

while (j < sorteeritudMündid.length) {
    summa += sorteeritudMündid[j];
    j++;
}

// Tulemuste kuvamine
console.log("Mündide arv: " + sorteeritudMündid.length);
console.log("Mündide summa: " + summa);
console.log("Sorteeritud mündid: " + sorteeritudMündid);
