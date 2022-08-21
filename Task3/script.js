/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const btnClick = document.getElementById("btn");

btnClick.addEventListener("click", function () {
    fetch("https://api.github.com/users")
        .then((resp) => resp.json())
        .then((data) => {
            let output = "";
            data.forEach((item) => {
                output += `<div>
                  <p>${item.login}</p>
                  <img>${item.avatar_url}
                  </div>
                  `
            });
            document.getElementById("output").innerHTML = output;
        })
        .catch(error => alert(error, "error"));
})
