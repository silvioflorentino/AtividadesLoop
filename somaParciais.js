let soma = 3;
let resultado = "";
let texto = "3 (soma do número 1 com o número 2) </br>";

for (let i = 3; i < 11; i++) {
    soma += i;
    resultado += soma + " (soma parcial com o número" + i + ") </br>";
    
}

document.getElementById("resul").innerHTML = texto + resultado