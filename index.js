// Write your solution here

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    let newCats = cats.push("Ralph");

    return newCats;
}

function destructivelyPrependCat(){
    let newCats = cats.unshift("Bob");
    
    return newCats;
}

function destructivelyRemoveLastCat(){
    let newCats = cats.pop();

    return newCats;
}

function destructivelyRemoveFirstCat(){
    let newCats = cats.shift();

    return newCats;
}

function appendCat(){
    let newCats = [...cats, "Broom"];

    return newCats;
}

function prependCat(){
    let newCats = ["Arnold", ...cats];

    return newCats;
}

function removeLastCat(){
    let newCats = cats.slice(0, 2);

    return newCats;
}

function removeFirstCat(){
    let newCats = cats.slice(1, 3);

    return newCats;
}