let player1 = prompt("Escolha um número de 1 a 10 'jogador1'");
let player2 = prompt("Tente adivinhar o número do 'jogador1'");
let texto = "";
let tentativas = 1;

while (player2 != player1 ) {
     player2 = prompt("Tente adivinhar o número do 'jogador1'");
     tentativas++;
     if(player2 == player1){
        texto = "Player2 acertou o número "+player1 + " em " + tentativas + " tentativas. ";
        document.getElementById("texto").innerHTML = texto;
     }
}

if(player2 == player1){
    texto = "Player2 acertou o número "+player1 + " em " + tentativas + " tentativas. ";
    document.getElementById("texto").innerHTML = texto;
 }