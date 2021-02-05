import './Entete.css';

function Entete(props) {
    return (
      <header>
        <div className="logo">Logo</div>
        <ul className="navPrincipale">
          <li>Produits</li>
          <li>À propos de nous</li>
          <li>Contactez-nous</li>
        </ul>
        <ul>
          <li>Panier</li>
          <li>Mon compte</li>
        </ul>
      </header>
    );
}

export default Entete;