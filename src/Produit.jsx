import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props){

    function ajouterAuPanier(){

    }
    return(
        <li className="Produit"> 
            <img src={'images-produits/' + props.id + '.webp'} alt={props.nom} />
            <div className="info">
                <p className="nom">{props.nom}</p>
                <p className="prix">{props.prix} $CA</p>
            </div>
            <BtnAjoutPanier onClick={ajouterAuPanier} />
        </li>
    );
}