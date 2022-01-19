// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

const newCats = [...cats,"Broom"]; 
    function appendCat(Broom) {
        cats.slice("Broom")
        return newCats;
}

const newerCats = ["Arnold",...cats]; 
    function prependCat(Arnold) {
        cats.slice("Arnold")
        return newerCats;
}

//const lessCats = [...cats]; 
    function removeLastCat() {
        return cats.slice(0,-1)
    }

    function removeFirstCat() {
        return cats.slice(1)
    }