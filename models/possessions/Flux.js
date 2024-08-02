// THIS MAY CHANGE IN THE FUTURE
// dateDebut = 01/01/2024
// montant = 400_000
// jour = 1
import Possession from "./Possession.js";
export default class Flux extends Possession {
  // Si salaire => +
  // Si train de vie => -
  constructor(possesseur, libelle, valeur, dateDebut, dateFin, tauxAmortissement, jour) {
    super(possesseur, libelle, valeur, dateDebut, dateFin, tauxAmortissement)
    this.valeur = valeur;
    this.jour = jour;
    // this.source = source; // null || Compte
    // this.destination = destination; // Compte
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.valeurConstante = valeur
  }


  getValeur(date) {
    // TODO: calculer le montant total du flux en prenant compte du jour de versement
    // calcul différence entre date et date debut

    const prd = (debut, dateEvaluation, jourJ) => {
        let start = new Date(debut);
        let end = new Date(dateEvaluation);
        let Dday = jourJ;
        
        let compteur = 0;
    
        if (start.getDate() <= Dday) {
            compteur++;
        }
        
        if (end.getDate() >= Dday && !(start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth())) {
            compteur++;
        }
        
        let totalMois = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) - 1;
    
        compteur += Math.max(0, totalMois);
    
        return compteur;
    }

    // calcul montant total

    this.valeur += prd(this.dateDebut, date, this.jour.getDate()) * this.valeurConstante;

    return this.valeur;
  }
}