import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

function Entete(props) {
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
            <Badge badgeContent={17} color="secondary">
            <ShoppingCartIcon/>
            </Badge>
            </li>
          <li>Mon compte</li>
        </ul>
      </header>
    );
}

export default Entete;