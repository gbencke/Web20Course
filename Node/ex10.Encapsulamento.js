function Aluno(nome,CPF,endereco,cidade,data_nascimento){
	var ValorMatricula = 100;

	this.getValorMatricula = function (){
		return ValorMatricula;
	}

	function CalcularAtrasoMensalidade(MesesAtrasado,ValorMensalidade){
		return ValorMensalidade*MesesAtrasado*1.10;
	}

	this.ExisteValorPendente = function (UltimoPagamento,ValorMensalidade){
		if(CalcularAtrasoMensalidade(UltimoPagamento,500)>0){
			return true;
		}else{
			return false;
		}
	}
}

AlunoJose = new Aluno('José','11190912112','Av.Jose Patrocinio, 755','Porto Alegre','1986-02-02');

console.log('Valor de AlunoJose.getValorMatricula():'+AlunoJose.getValorMatricula());
console.log('Valor de AlunoJose.ValorMatricula:'+AlunoJose.ValorMatricula);

console.log('Valor de AlunoJose.ExisteValorPendente:'+AlunoJose.ExisteValorPendente(1,200));

if(AlunoJose.CalcularAtrasoMensalidade){
   console.log('Valor de AlunoJose.CalcularAtrasoMensalidade():'+AlunoJose.CalcularAtrasoMensalidade(1,200));
}else{
   console.log('Valor de AlunoJose.CalcularAtrasoMensalidade(): indefinido');
}


