console.log("[exercise] start");
const tiere = ["katze", "hund", "panda", "delfin"];
const tiereGross = tiere.map((tier) => tier.toUpperCase());

console.log("Tiere groß:", tiereGross);


const preise = [12.1, 19.99, 3.5, 0.01];
const aufgerundet = preise.map((p) => Math.ceil(p));
console.log("Aufgerundet:", aufgerundet);
// Optional: einfache Euro-Anzeige
const preiseMitEuro = aufgerundet.map((p) => `${p} €`);
console.log("Mit €:", preiseMitEuro);
