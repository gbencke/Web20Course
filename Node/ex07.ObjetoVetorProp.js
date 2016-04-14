function Aluno(nome,CPF,endereco,cidade,data_nascimento){
	this.Nome = nome;
	this.CPF = CPF;
	this.Endereco = endereco;
	this.Cidade = cidade;
	this.DataNascimento = data_nascimento;

	this.PagarMensalidade = function (valor){
		return this.Nome + " pagou o valor de R$ " + valor + " de mensalidade";
	}

	this.Matricular = function (aula,turma){
		return this.Nome + " foi matriculado na aula " + aula + " na turma " + turma;
	}

}

// Vamos Criar um aluno Jose
AlunoJose = new Aluno('José','11190912112','Av.Jose Patrocinio, 755','Porto Alegre','1986-02-02');

console.log(
	"Criei o Aluno:" + AlunoJose.Nome + 
	",\nCPF:" + AlunoJose.CPF + 
	"\nQue mora na " + AlunoJose.Endereco + 
	"\nEm " + AlunoJose.Cidade +
	"\nNascido em " + AlunoJose.DataNascimento);

console.log();
console.log(AlunoJose.PagarMensalidade());
console.log(AlunoJose.Matricular());
