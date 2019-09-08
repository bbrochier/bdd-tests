Feature: Page Maison

Scenario: Structure de la page

  Given on ouvre la page "maison"
  Then le titre est "Maison connectée et protégée, domotique et surveillance Orange"
  Then on accepte les cookies
  And le carrousel est présent