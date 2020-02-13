var count = 0;
var win = false;

export function randomNb (max) {
    return (Math.floor(Math.random() * max));
}

export function play (e, nb, entry, infos) {
    e.preventDefault();

    count++;


        if(nb>entry){
            infos = "C'est plus grand !";
        }
        else if(nb<entry){
            infos = "C'est plus petit !";
        }
        else {
            infos = "Gagné !";
        }

//     if (nb !== entry) {
//         if (nb < entry){
//             infos = "C'est plus petit !";
//         }else if (nb > entry){
//             infos = "C'est plus grand !";
//         }
//     }
//
//     if(nb == entry){
//         infos = "Gagné !";
//
// /*        if (myTable.length === 5) {
//             myTable.shift();
//         }
//         myTable.push([myRandom,counter]);
//         displayTable();*/
//         win = true;
//     }
    console.log(nb);
    console.log(entry);
    console.log(infos);
}

export function replay (e, nb, entry, infos) {
    e.preventDefault();




}



