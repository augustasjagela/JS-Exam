/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let btnClick = document.getElementById("btn__element");
let clicksNum = 0;

btnClick.addEventListener("click", function () {
    clicksNum += 1;
    document.getElementById("btn__state").innerHTML = clicksNum;
});

