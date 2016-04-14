
function Aluno(nome,CPF,endereco,cidade,data_nascimento){
	this.Nome = nome;
	this.CPF = CPF;
	this.Endereco = endereco;
	this.Cidade = cidade;
	this.DataNascimento = data_nascimento;
}

// Vamos Criar um aluno Jose
AlunoJose = new Aluno('José','11190912112','Av.Jose Patrocinio, 755','Porto Alegre','1986-02-02');

console.log();
console.log(
	"Criei o Aluno:" + AlunoJose.Nome + 
	", CPF:" + AlunoJose.CPF + 
	" que mora na " + AlunoJose.Endereco + 
	" em " + AlunoJose.Cidade +
	" nascido em " + AlunoJose.DataNascimento);

// Vamos Criar um aluno Pedro
AlunoPedro = new Aluno('Pedro','23232323232','Av.Getulio Vargas, 44','Porto Alegre','1980-02-02');

console.log();
console.log(
	"Criei o Aluno:" + AlunoPedro.Nome + 
	", CPF:" + AlunoPedro.CPF + 
	" que mora na " + AlunoPedro.Endereco + 
	" em " + AlunoPedro.Cidade +
	" nascido em " + AlunoPedro.DataNascimento);


