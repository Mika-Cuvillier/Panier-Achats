import { Badge } from '@material-ui/core';
import './BtnAjoutPanier.scss';

export default function BtnAjoutPanier(props){
    return(
        <Badge badgeContent={0} color="primary">
            <button className="BtnAjoutPanier" onClick={props.onClick} >Ajouter au panier</button>
        </Badge>
    );
}