import './ConteneurGlobal.css';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';
/*
composant React
*/
function ConteneurGlobal() {
  return (
    <div className="ConteneurGlobal">
      <Entete />
      <section className="contenuPrincipal">
          <ListeProduits />
      </section>
      <PiedDePage />
    </div>
  );
}

export default ConteneurGlobal;
