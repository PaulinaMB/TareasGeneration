const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btin-submit");
const emailREGEX = /^[\w.+\-]+@gmail\.com$/ ;
//regex regular expression, determina patrones que se deben cumplir.

submitButton.disabled = true;
/**
 * Evento para input, el cual evaluará el patrón de expresión regular y en caso de cumplir con el patrón habilitará el botón y podremos ser redirigidos a la página index.html
 *  - Se obtiene el valor actual del campo email (input) usando e.target.value y se almacena en una variable (text).
 *  - Se evalúa la REGEX
 */

emailInput.addEventListener("input", (e) => {
    const text = e.target.value;
    if(emailREGEX.test(text) == true){
        submitButton.disabled = false;
    }
})