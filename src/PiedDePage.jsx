import './PiedDePage.scss';

// Composant PiedDePage
function PiedDePage(props){
    const annee = (new Date()).getFullYear();

    return(
      <footer className="PiedDePage">
        <p>&copy;{annee} - TIM - Tous droits réservés</p>
      </footer>
    );
}

export default PiedDePage;