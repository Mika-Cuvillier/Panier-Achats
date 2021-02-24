import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import SommairePanier from './SommairePanier';

function Entete(props) {
    const[panier, setPanier] = props.etatPanier;
    return (
      <header className="Entete">
        <div className="logo">Logo</div>
        <ul className="navPrincipale">
          <li>Produits</li>
          <li>À propos de nous</li>
          <li>Contactez-nous</li>
        </ul>
        <ul className="navUtilisateur">
          <li>
            <Badge badgeContent={Object.values(panier).reduce((acc, article) => acc + article.qte, 0)} color="secondary">
            <ShoppingCartIcon/>
            </Badge>
            <SommairePanier panier={panier} />
            </li>
          <li>Mon compte</li>
        </ul>
      </header>
    );
}

export default Entete;


/* // façon IMPÉRATIVE d'obtenir de l'information d'un tableau
    let nombreArticles = 0;
    for(let i=0; i<articlesTab.length; i++){
      nombreArticles += articlesTab[i].qte;
    } */

    // Façon DÉCLARATIVE d'obtenir de l'information d'un tableau
    //const nombreArticles2 = articlesTab.reduce((acc, article) => acc + article.qte, 0);