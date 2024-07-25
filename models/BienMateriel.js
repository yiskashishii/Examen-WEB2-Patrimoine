import Possession from "./Possession.js";
import amortissement from "./amortissement.js";

export default class BienMateriel extends Possession {
  constructor(possesseur, libelle, valeur, date, taux) {
    super(possesseur, libelle, valeur, date);
    this.taux = taux;
  }

  getValeur(date) {
    const result = amortissement(this.date, date, this.valeur, this.taux);
    return result > 0 ? result : 0;
  }
}
