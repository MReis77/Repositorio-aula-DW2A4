//Má prática

//O erro é declarar a variável dentro do for

//Perceba como precisamos determinar o tamanho do vetor a cada iteração e como temos de 
//atravessar a DOM para encontrar o elemento container todas as vezes – altamente ineficiente

for(var i = 0; i < someArray.length; i++) {
    var container = document.getElementById('container');
    container.innerHtml += 'my number: ' + i;
    console.log(i);
   }