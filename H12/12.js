//Agata Brete Jõpiselg IT-23 26.01/2026


// Toote objekt
const toode = {
  nimetus: "Õun",
  hind: 1.50,
  kogus: 10,

  koguhind() {
    return this.hind * this.kogus;
  },

  muudaKogust(uusKogus) {
    this.kogus = uusKogus;
  },

  kuva() {
    return `${this.nimetus} - ${this.hind} EUR - Kogus: ${this.kogus}`;
  }
};

console.log(toode.nimetus, toode.hind, toode.kogus);
console.log("Toote koguhind:", toode.koguhind(), "EUR");

toode.muudaKogust(5);
console.log("Uus kogus:", toode.kogus);

console.log(toode.kuva());


// Ostukorv
const ostukorv = {
  tooted: [
    { nimi: "Piim", hind: 3.60, kogus: 2 },
    { nimi: "Leib", hind: 2.00, kogus: 1 },
    { nimi: "Munad", hind: 1.50, kogus: 6 },
    { nimi: "Juust", hind: 4.20, kogus: 1 },
    { nimi: "Tomatid", hind: 2.30, kogus: 3 }
  ],

  kuvaSisu() {
    this.tooted.forEach(toode => {
      console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
    });
  },

  lisaToode(nimi, hind, kogus) {
    this.tooted.push({ nimi, hind, kogus });
  },

  koguSumma() {
    let summa = 0;
    this.tooted.forEach(toode => {
      summa += toode.hind * toode.kogus;
    });
    return summa;
  }
};

ostukorv.kuvaSisu();

ostukorv.lisaToode("Kohv", 5.80, 2);

console.log("\nPärast uue toote lisamist:");
ostukorv.kuvaSisu();

console.log("Ostukorvi kogu summa:", ostukorv.koguSumma().toFixed(2), "EUR");
