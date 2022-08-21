/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];

const dogOwners = users.filter(y => y.hasDog = true);
const ownersStr = JSON.stringify(dogOwners);
const petsContainer = document.createElement("div");
document.body.append(petsContainer);

document.querySelector("div").innerHTML = `These people are pet owners:<br> ${ownersStr}<br>`;

const legalAge = users.filter(x => x.age >= 18);
const legalAgeStr = JSON.stringify(legalAge);
const adultsContainer = document.createElement("section");
document.body.append(adultsContainer);

document.querySelector("section").innerHTML = `These people are 18 and higher:<br> ${legalAgeStr}`;



