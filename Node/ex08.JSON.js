AlunoJose = 
{
	 Nome:"José",
     CPF:"11190912112",
     Endereco:"Av.Jose Patrocinio, 755",
     Cidade:"Porto Alegre",
     DataNascimento:"1986-02-02",
     PagarMensalidade : function (valor){
		return this.Nome + " pagou o valor de R$ " + valor + " de mensalidade";
	 },     
     Matricular : function (aula,turma){
		return this.Nome + " foi matriculado na aula " + aula + " na turma " + turma;
	 }	 
 };

 console.log(
	"Criei o Aluno:" + AlunoJose.Nome + 
	",\nCPF:" + AlunoJose.CPF + 
	"\nQue mora na " + AlunoJose.Endereco + 
	"\nEm " + AlunoJose.Cidade +
	"\nNascido em " + AlunoJose.DataNascimento);

console.log();
console.log(AlunoJose.PagarMensalidade());
console.log(AlunoJose.Matricular());
