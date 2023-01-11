// Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui 
//affiche si deux nombres de cette liste ont k comme résultat de leur somme.

function sort (array,k) {
    for (let i = 0; i<array.length - 1; i++){
        let sum = array[i];
        for (let j=0; j<array.length;j++){
            let result = array[i] + array[j];
            if (result == k){
                return true;
            }
        } 
    }
    return false;
}

console.log("Exo 1 : "+sort([10, 15, 3, 7], 17))



//Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant 
//à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien 
//de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.
// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont 
//tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

//  Exercice 2
function viewMoney(list){
    let result = 1;
    for(i=0;i<list.length;i++){
        let tmpValue = true;
        for(j=i; j< list.length; j++){
            list[j] > list[i] ? tmpValue + false : null;
        }
        tmpValue ? result++ : null
    }
    return result
}
console.log("Exo2: "+ viewMoney([3, 7, 8, 3, 6, 1]));
console.log("Exo2: "+ viewMoney([1, 4, 5, 8]));

//  Exercice 3
function exo3(array,k){ 
    for(let i = 0; i< array.length -1; i++){
        let slot = [...array];
        if(slot.includes(k-array[i])){
        return true;
    }
    }
        return false;
}

console.log("Exo 3: "+exo3([10, 15, 3, 7], 17))

// exo4
let result = 1;
function exo4(arr,i=0){
    if (i>= arr.length - 1){
        return result;
    }
    arr.slice(i+1).filter(e=>arr[i] <=e).length ==0 ? result++ : null;
    return exo4(arr, i+1);
}
console.log("Exo 4:"+exo4([3, 7, 8, 3, 6, 1]));
console.log("Exo 4:"+exo4([1, 4, 5, 8]));

//exo 5
function Exo5(array, k) {
    if (array.filter(e => array.includes(k - e)).length > 1) {
      return true;
    }
    return false;
  }
  
  console.log("Exercice 5 :");
  console.log(Exo5([10, 15, 3, 7], 17));