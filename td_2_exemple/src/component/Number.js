//let entry = document.getElementById('data').value;
let count = 0;
let win = false;

export function randomNb (max) {
    return (Math.floor(Math.random() * max));
}

/*export function play (myRandom, infos) {

    count++;

    if (myRandom !== entry) {
        if (myRandom < entry){
            infos = "C'est plus petit !";
        }else if (myRandom > entry){
            infos = "C'est plus grand !";
        }
    }

    if(myRandom === entry){
        infos = "Gagné !";
/!*        console.log(myRandom);
        if (myTable.length === 5) {
            myTable.shift();
        }
        myTable.push([myRandom,counter]);
        displayTable();*!/
        win = true;
    }

}*/


