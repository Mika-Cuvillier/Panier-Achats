import { useEffect, useState } from 'react';
import './ConteneurGlobal.scss';
import Entete from './Entete';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';
import { Switch, Route } from 'react-router-dom';

export default function ConteneurGlobal() {
 
  //utiliser la gestion de l'état avec "useState"
  const etatPanier = useState(
    () => window.localStorage.getItem('panier-4pa') ? JSON.parse(window.localStorage.getItem('panier-4pa')) : {}
  );
  const [panier] = etatPanier;

  // Sauvegarder le panier dans localStorage à chaque fois que l'état du panier est muté.
  useEffect(
    () => window.localStorage.setItem('panier-4pa', JSON.stringify(panier))
    , [panier]
  );
  
  return (
    <div className="ConteneurGlobal">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
      <Switch>
          <Route path="/" exact>
            <Accueil/>
          </Route>
          <Route path="/nos-produits">
            <ListeProduits etatPanier={etatPanier} />
          </Route>
          <Route path="/a-propos-de-nous">
            <Apropos/>
          </Route>
          <Route path="/contactez-nous">
            <Contact/>
          </Route>
        </Switch>
      </section>
      <PiedDePage />
    </div>
  );
}
