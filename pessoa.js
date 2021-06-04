function Pessoa() {
    this.nome;
    this.nascimento;
    this.matricula;
}

function Aluno() {
    Pessoa.call(this);
    this.curso;
}
Aluno.prototype = Object.create(Pessoa.prototype);
        
var novaPessoa = new Pessoa;

novaPessoa.nome = "Antonio";
console.log(novaPessoa.nome);

novaPessoa.curso = "TADS";
console.log(novaPessoa.curso);

var novaPessoa2 = new Pessoa;

var novoAluno = new Aluno;
novoAluno.curso = "TADS";
novoAluno.localDeEstagio = "IFSP";

var novoAluno2 = new Aluno;
novoAluno2.curso = "TADS";

Aluno.prototype.localDeEstagio = "nenhum";

console.log(novoAluno2.localDeEstagio);