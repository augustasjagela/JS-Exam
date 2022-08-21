/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", weightFunction);

function weightFunction(e) {
    e.preventDefault();
    document.getElementById("output").innerHTML = `Jūsų svoris: <br> Svarais(lb): ${search.value * 2.046},<br> Gramais(g): ${search.value * 0.001},<br> Uncijomis(oz): ${search.value * 35.274}`;
}