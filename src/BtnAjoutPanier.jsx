import { Badge } from '@material-ui/core';
import './BtnAjoutPanier.scss';

export default function BtnAjoutPanier(props){
    return(
        <Badge badgeContent="5" color="primary">
            <button className="BtnAjoutPanier" >Ajouter au panier</button>
        </Badge>
    );
}