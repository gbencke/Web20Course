

function Somar(a,b){
	ret = a+b;
    return ret;
}

console.log("Resultado de Somar(2,3):",Somar(2,3));
console.log("Nesse Caso, ret é uma variavel global:" + ret);

function SomarComVar(a,b){
	var retComVar = a+b;
    return retComVar;
}

console.log("Resultado de SomarComVar(2,3):",Somar(2,3));

try{
    console.log("Nesse Caso, retComVar é uma variavel global:" + retComVar);
}catch(ex){
	console.log("");
	console.log("-----------------------------------------------------");
	console.log("Deu uma exceção:" + ex);
	console.log("-----------------------------------------------------");
}

