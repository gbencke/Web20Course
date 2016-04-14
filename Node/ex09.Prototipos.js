function UsuarioSistema(){

   this.Login=function(){
   	    console.log('Logado');
   }
   this.DefinirUsuarioSenha=function(Usuario,Senha){
		this.Usuario = Usuario;
		this.Senha = Senha;   
   }
}

function Aluno(nome,CPF,endereco,cidade,data_nascimento){
	this.Nome = nome;
	this.CPF = CPF;
	this.Endereco = endereco;
	this.Cidade = cidade;
	this.DataNascimento = data_nascimento;
}

Aluno.prototype=new UsuarioSistema();
Aluno.prototype.constructor=Aluno;

AlunoJose = new Aluno('José','11190912112','Av.Jose Patrocinio, 755','Porto Alegre','1986-02-02');

AlunoJose.DefinirUsuarioSenha('Jose21','12345');

console.log('Aluno ' + AlunoJose.Nome + ' definiu Usuario/Senha: (' + AlunoJose.Usuario + "/" + AlunoJose.Senha + ")" );

AlunoJose.Login();
