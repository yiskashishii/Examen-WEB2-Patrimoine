export default function amortissement(
  datePossession,
  dateActuelle,
  valeur,
  taux,
) {
  const differenceDate = {
    year: dateActuelle.getFullYear() - datePossession.getFullYear(),
    month: dateActuelle.getMonth() - datePossession.getMonth(),
    day: dateActuelle.getDate() - datePossession.getDate(),
  };

  const tauxAnnee = differenceDate.year * taux;
  const tauxMois = (differenceDate.month * taux) / 12;
  const tauxJour = (differenceDate.day * taux) / 365;
  const tauxFinal = tauxAnnee + tauxMois + tauxJour;

  const valeurFinal = Math.round(valeur - (valeur * tauxFinal) / 100);
  return valeurFinal;
}
