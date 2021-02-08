import './ListeProduits.css';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props){

    const notes = [95.9, 76.6874, 53.99, 85.6123];
    const notesArrondies = notes.map(note => note.toFixed(1))
    //const notesArrondies = notes.map(function(note) {
       // return note.toFixed(1);
   // })
    console.log("Tableau des notes arrondies", notesArrondies);
    //tableau qui va contenir les composants produits requis
    let composantProduit=[];

    for(let i=0; i<tabProduits.length; i++) 

    //on le remplit de 3 facons différentes

    //1. avec une boucle habituelle
       // {
        //    composantProduit[i] = <Produit nom={tabProduits[i].nom} prix={tabProduits[i].prix} id={tabProduits[i].id} />
        //}
    
    //2. avec la méthode forEACH des tableaux
    //tabProduits.forEach(function(prd) {
       // composantProduit.push(<Produit nom={prd.nom} prix={prd.prix} id={prd.id} />)
    //})
    return(
        <>
            <h2>Produits disponibles</h2>
            <ul className="ListeProduits">
                {
                    tabProduits.map(function(prd) {
                        return <Produit key={prd.id} nom={prd.nom} prix={prd.prix} id={prd.id} />
                    })
                }
            </ul>
        </>
    );
}