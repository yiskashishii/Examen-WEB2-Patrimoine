import Personne from "./models/Personne.js";
import Possession from "./models/Possession.js";
import Patrimoine from "./models/Patrimoine.js";
import BienMateriel from "./models/BienMateriel.js";
import CompteCourant from "./models/CompteCourant.js";

const Ilo = new Personne("Ilo");
const dateArgent = new Date("2024-05-13");
const espece = new Possession(Ilo, "espece", 400_000, dateArgent);
const compteEpargne = new Possession(
  Ilo,
  "compte epargne",
  200_000,
  dateArgent,
);
const oridnateur = new BienMateriel(
  Ilo,
  "oridnateur",
  2_000_000,
  new Date("2021-10-26"),
  10,
);
const vetements = new BienMateriel(
  Ilo,
  "vetements",
  1_000_000,
  new Date("2024-01-01"),
  20,
);
const trainDeVie = new Possession(Ilo, "trainDeVie", 500_000, dateArgent);
const salaire = new Possession(Ilo, "salaire", 0, dateArgent);
const compteCourant = new CompteCourant(
  Ilo,
  "compte courant",
  600_000,
  dateArgent,
  salaire,
  trainDeVie,
);
const possessionIlo = [
  espece,
  compteEpargne,
  compteCourant,
  oridnateur,
  vetements,
];
const patrimoineIlo = new Patrimoine(Ilo, possessionIlo);

console.log(patrimoineIlo.getValeur(new Date("2024-07-14")));
// console.log(compteCourant.getValeur(new Date("2024-07-14")));
