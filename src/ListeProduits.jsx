import './ListeProduits.css';
import Produit from './Produit';

export default function ListeProduits(props){
    return(
        <>
            <h2>Produits disponibles</h2>
            <ul className="ListeProduits">
            <Produit nom="T-shirt blanc à manches longues" prix="20.67" id="prd0001" />
            <Produit nom="T-shirt rose à manches longues" prix="15.95" id="prd0002" />
            </ul>
        </>
    );
}