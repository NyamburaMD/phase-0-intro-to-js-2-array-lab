// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
function destructivelyRemoveLastCat(name) {
    cats.pop();
  }
  function destructivelyRemoveFirstCat(name) {
    cats.shift();
  }
  function appendCat(name) {
    return [...cats, name];
  }
  function prependCat(name) {
    return [name, ...cats]; // Creates a new array with the cat prepended
  }
  function removeLastCat(name) {
    return cats.slice(0, cats.length - 1); // Returns a new array without the last cat
  }
  function removeFirstCat(name) {
    return cats.slice(1); // Returns a new array without the first cat
  }
     
  
