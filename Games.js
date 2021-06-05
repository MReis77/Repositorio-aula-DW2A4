function Games ()
{
    this.nome ="";
    this.genero ="";
    this.plataforma ="";
}

function Desenvolvedora()
{
    Games.call(this);
    this.NomeDesenvolvedora ="";
    this.lancamento ="";
    this.TempoDesen = "";

}

function Publico ()
{
    Desenvolvedora.call(this);
    Games.call(this);

    this.expectatica ="";
    this.avaliacoes =""; 
}

Desenvolvedora.prototype = Object.create(Games.prototype);

var novoGame = new Games;

novoGame.nome = "Red Dead Redemption 2";
console.log(novoGame.nome);

novoGame.genero = "Ação-Aventura";
console.log(novoGame.genero);

novoGame.plataforma = "PS4/ XBOX One/ PC";
console.log(novoGame.plataforma);

var novaDesenvolvedora = new Desenvolvedora;

novaDesenvolvedora.NomeDesenvolvedora = "Rockstar";
console.log(novaDesenvolvedora.NomeDesenvolvedora);

novaDesenvolvedora.TempoDesen = "8 anos";
console.log(novaDesenvolvedora.TempoDesen);

novaDesenvolvedora.lancamento = "26 de outubro de 2018";
console.log(novaDesenvolvedora.lancamento);

Publico.prototype = Object.create(Games.prototype);

var newGames = new Games;

newGames.nome = "Assasin's Creed 3";
console.log(newGames.nome);

newGames.genero = "Ação-Aventura";
console.log(newGames.genero);

newGames.plataforma = "PS3/ XBOX 360/ PC";
console.log(newGames.plataforma);

var novoPublico = new Publico;

novoPublico.avaliacoes = "Jogo fenomenal";
console.log(novoPublico.avaliacoes);

novoPublico.expectatica = "Será o jogo do ano";
console.log(novoPublico.expectatica);

