import './PiedDePage.css';

// Composant PiedDePage
function PiedDePage(props){
    const annee = (new Date()).getFullYear();

    return(
      <footer>
        <p>&copy;{annee} - TIM - Tous droits réservés</p>
      </footer>
    );
}

export default PiedDePage;