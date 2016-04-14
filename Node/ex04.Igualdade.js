
var arraySimples = Array(); // Tanto Faz usar Array ou []


// Usando indice normal...

arraySimples.push(0);
arraySimples.push('Teste');
arraySimples.push(true);

for(var f=0;f<3;f++){
	console.log("Elemento(" + f  + ") = "+arraySimples[f] );
}

var arraySimples = []; // Tanto Faz usar Array ou []

// Usando Chaves...

arraySimples['primeiro_elemento']=0;
arraySimples['segundo elemento']='Teste';
arraySimples['Terceiro elemento']=true;

for(var f=0;f<3;f++){
	console.log("Elemento(" + f  + ") = "+arraySimples[ Object.keys(arraySimples)[f]] );
}

