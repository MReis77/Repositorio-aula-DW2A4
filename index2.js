//BEM MELHOR
//O "motor" do js consegue a leitura do vetor mais rápida

var container = document.getElementById('container');
for(var i = 0, len = someArray.length; i < len;  i++) {
 container.innerHtml += 'my number: ' + i;
 console.log(i);
}