// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}
cats;

function destructivelyRemoveLastCat () {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function appendCat (Broom) {
    return [...cats, "Broom"];
  }
  
  function prependCat (Arnold) {
    return [Arnold, ...cats];
  }

  
  function removeFirstCat () {
    return cats.slice(1);
  }

  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }
  
  