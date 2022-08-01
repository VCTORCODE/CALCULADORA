/* Problemas conocidos: 
    validar el primer numero 
    validar si ya hay un carater
    restringir operadores consecutivos
    boton de borrar el ultimo digito
    el resultado no se pueda mezclar con otros caracteres posteriormente
    label en donde se capture las operaciones
*/
const btn = document.querySelectorAll(".btn")
const input = document.querySelector("input")
let string = "";
Array.from(btn).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "=") {
            let result = eval(string)
            input.value = result
        }
        else if (e.target.innerText == "C") {
            string = " ";
            input.value = string;
        }
        else {
            string += e.target.innerText
            input.value = string;
        }
    })
})