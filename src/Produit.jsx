import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit({id, nom, etatPanier, prix}){

    const [panier, setPanier] = etatPanier;

    function ajouterAuPanier(){
        const article = panier[id];
        if(article){
            article.qte += 1; 
        }else{
            panier[id] = {prix: prix, qte: 1};
        }
        
        console.log(panier);
        // Tant qu'on a pas fait appel a setPanier, React ne sait pas que l'état du panier est différent
        setPanier({...panier});
    }
    let qteArticlePanier = 0;
    let texteBtnAjout = "Ajouter au panier";
    let btnCouleurAjout ="";
    if(panier[id]){
        qteArticlePanier = panier[id].qte;
        texteBtnAjout = "Augmenter la quantité"
        btnCouleurAjout = "#900";
    }
    return(
        <li className="Produit"> 
            <img src={'images-produits/' + id + '.webp'} alt={nom} />
            <div className="info">
                <p className="nom">{nom}</p>
                <p className="prix">{prix} $CA</p>
            </div>
            <BtnAjoutPanier onClick={ajouterAuPanier} qte={qteArticlePanier} texte={texteBtnAjout} couleur={btnCouleurAjout} />
        </li>
    );
}