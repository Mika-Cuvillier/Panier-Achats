import { Badge } from '@material-ui/core';
import './BtnAjoutPanier.scss';

export default function BtnAjoutPanier(props){
    return(
        <Badge badgeContent={props.qte} color="primary">
            <button className= {'BtnAjoutPanier'} onClick={props.onClick} style={{backgroundColor: props.couleur}} > {props.texte} </button>
        </Badge>
    );
}