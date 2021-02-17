import { useState } from 'react';
import './ConteneurGlobal.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';

export default function ConteneurGlobal() {
  
  //utiliser la gestion de l'état avec "useState"
  const etatPanier = useState({});

  return (
    <div className="ConteneurGlobal">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
          <ListeProduits etatPanier={etatPanier} />
      </section>
      <PiedDePage />
    </div>
  );
}


