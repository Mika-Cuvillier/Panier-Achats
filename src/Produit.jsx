import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props){
    const [panier, setPanier] = props.etatPanier;

    function ajouterAuPanier(){
        const article = panier[props.id];
        if(article){
            article.qte += 1; 
        }else{
            panier[props.id] = {prix: props.prix, qte: 1};
        }
        
        console.log(panier);
        // Tant qu'on a pas fait appel a setPanier, React ne sait pas que l'état du panier est différent
        setPanier({...panier});
    }
    let qteArticlePanier = 0;
    let texteBtnAjout = "Ajouter au panier";
    let btnCouleurAjout ="";
    if(panier[props.id]){
        qteArticlePanier = panier[props.id].qte;
        texteBtnAjout = "Augmenter la quantité"
        btnCouleurAjout = "#900";
    }
    return(
        <li className="Produit"> 
            <img src={'images-produits/' + props.id + '.webp'} alt={props.nom} />
            <div className="info">
                <p className="nom">{props.nom}</p>
                <p className="prix">{props.prix} $CA</p>
            </div>
            <BtnAjoutPanier onClick={ajouterAuPanier} qte={qteArticlePanier} texte={texteBtnAjout} couleur={btnCouleurAjout} />
        </li>
    );
}