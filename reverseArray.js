/*
Scrivere due funzioni, reverseArray e reverseArrayInPlace. 
La prima, preso un array, costruisce un nuovo array con gli elementi in ordine inverso. 
La seconda fa la stessa cosa ma senza creare un nuovo array, 
modificando quello passato in input.
Nota: nessuna delle due funzioni possono usare il metodo reverse degli array.
*/

/*
The function reverseArrayInPlace() swaps the first part of a given array with the last.
Then it inverts the second with the second-last and so on...
If the given array is odd the function still works: 
the last number "in the middle" will indeed not be moved!
+++IMPORTANT: WE DO NOT CREATE A NEW ARRAY:WE SIMPLY SWAP VALUE+++
*/

function reverseArrayInPlace(givenArray) {
  for (i = 0; i < givenArray.length / 2; i++) {
    var container = 0; //I use this container variable to "store" the value of the first element before it changes to the value of the last
    container = givenArray[i];
    givenArray[i] = givenArray[givenArray.length - 1 - i];
    givenArray[givenArray.length - 1 - i] = container; //Then I use the "previously saved" container to change the last element of the array to the container's value (wich is equal to the value of the former first element)
  }
  return givenArray;
}
var arrayToBeReversed = [33, 44, 55, 22, 1];
console.log(reverseArrayInPlace(arrayToBeReversed));

//+++++++++++++++++++

/*
    The function reverseArray() takes an array and creates another one
    swapping the elements.
    Unlike the function before it creates a new array (the return at line 44
    is differente from the parameter given at line 38)
*/

function reverseArray(anotherGivenArray) {
  var newArrayCreated = [];

  for (y = 0; y < anotherGivenArray.length; y++) {
    newArrayCreated[y] = anotherGivenArray[anotherGivenArray.length - 1 - y];
  }
  return newArrayCreated;
}

var arrayToBeReversed2 = [33, 77, 55, 22, 1];
console.log(reverseArray(arrayToBeReversed2));
