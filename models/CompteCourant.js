import Possession from "./Possession.js";

export default class CompteCourant extends Possession {
  constructor(possesseur, libelle, valeur, date, salaire, trainDeVie) {
    super(possesseur, libelle, valeur, date);
    this.salaire = salaire;
    this.trainDeVie = trainDeVie;
  }

  getValeur(date) {
    const differenceDate = {
      annee: date.getFullYear() - this.date.getFullYear(),
      mois: date.getMonth() - this.date.getMonth(),
    };

    const newSalaire =
      date.getDay() >= 28
        ? this.salaire.getValeur() +
          this.salaire.getValeur() * differenceDate.mois +
          this.salaire.getValeur() * differenceDate.annee * 12
        : this.salaire.getValeur() * differenceDate.mois +
          this.salaire.getValeur() * differenceDate.annee * 12;

    const newTrainDeVie =
      this.trainDeVie.getValeur() * differenceDate.mois +
      this.trainDeVie.getValeur() * differenceDate.annee * 12;

    const newValeur = this.valeur + newSalaire - newTrainDeVie;

    return newValeur > 0 ? newValeur : 0;
  }
}
