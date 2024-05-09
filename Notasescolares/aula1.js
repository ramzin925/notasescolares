function calcularmedia(){
   let nome = document.getElementById('nomeAluno').value;
   var num = Number (document.getElementById('num').value);
   var num2 = Number (document.getElementById('num2').value);
   var num3 = Number (document.getElementById('num3').value);
   var num4 = Number (document.getElementById('num4').value);
   let resultado = document.getElementById('resultado');
   var media = (num + num2 + num3 + num4) /4;

   resultado.innerHTML = `<p>Calculando a média do aluno ${nome}...</p>`;
   resultado.innerHTML += `<p>Sua média é de: ${media} &#9997</p>`;
   
   //CONDIÇÃO PARA SER APROVADO OU REPROVADO
   if(media >= 7){
    resultado.innerHTML += `<p><strong>APROVADO</strong></p>`;
   }else if (media >=4){
    resultado.innerHTML += `<p><strong>RECUPERAÇÃO</strong></p>`
   } else {
    resultado.innerHTML += `<p><strong>REPROVADO</strong></p>`;
   }
}


// CONDICIONAL IF/ELSE

let idade = 20;

if (idade === 20){ //SE a idade é maior ou igual a 18, signfica que é maior de idade.
    idade = idade + 15;
    console.log("idade adcionada com sucesso!");
    console.log(idade);
};

// x < y Y maior que X
// x > y Y menor que X
// >= igual ou maior
// <= igual ou menor
// == igual
// ! diferente