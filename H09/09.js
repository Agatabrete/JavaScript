// Agata Brete Jõpiselg IT-23 19.01/2026

// Klassikaline funktsioon
function kuvaNimi() {
    console.log("Agata Brete Jõpiselg");
}

// Noolefunktsioon
const kuvaNimiNoolega = () => {
    console.log("Agata Brete Jõpiselg");
}

// Test
kuvaNimi();          // kuvab: Agata Brete Jõpiselg
kuvaNimiNoolega();   // kuvab: Agata Brete Jõpiselg


function kuupaevEesti(kuupäev) {
    // Eesti kuud
    const kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", 
                  "juuli", "august", "september", "oktoober", "november", "detsember"];
    
    // Oletame, et kuupäev on kujul "19.07.23"
    const osad = kuupäev.split("."); // ["19", "07", "23"]
    const päev = osad[0];
    const kuuNumber = parseInt(osad[1], 10) - 1; // 0-põhine indeks kuudes
    const kuuNimi = kuud[kuuNumber];

    console.log(`${päev}. ${kuuNimi}`);
}

// Test
kuupaevEesti("19.07.23"); // kuvab: 19. juuli



function arvutaKeskmine(...arvud) { // rest-operator võimaldab teadmata hulga argumente
    const kogus = arvud.length;
    if (kogus === 0) return {kogus: 0, keskmine: 0};

    let summa = 0;
    for (let arv of arvud) {
        summa += arv;
    }

    const keskmine = summa / kogus;
    return {kogus, keskmine};
}

// Test
console.log(arvutaKeskmine(1, 2, 3, 4, 5)); // { kogus: 5, keskmine: 3 }


const salajaneSonum = (sonum) => {
    return sonum.replace(/[aeiouõäöüAEIOUÕÄÖÜ]/g, "*");
}

// Test
console.log(salajaneSonum("Tere tulemast!")); // T*r* t*l*mst!



const leiaUnikaalsedNimed = (nimed) => {
    const unikaalsed = [];
    for (let nimi of nimed) {
        if (!unikaalsed.includes(nimi)) {
            unikaalsed.push(nimi);
        }
    }
    return unikaalsed;
}

// Test
const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
console.log(leiaUnikaalsedNimed(nimed)); 
// ["Kati", "Mati", "Mari", "Jüri"]
