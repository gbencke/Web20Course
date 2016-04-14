var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'KL',
  password : 'KL2013',
  database : 'KL'
});

console.log('Vou me conectar ao Mysql e fazer uma consulta...');

connection.connect( function(err) { // Primeiro CallBack
    if (err) { console.error('erro de conexão: ' + err.stack);return; }
    connection.query('SELECT * from praticante where nome=''Guilherme'' ', function(err, rows, fields) { // Segundo CallBack
        if (err){  console.error('erro de conexão: ' + err.stack); return; }
        connection.query('SELECT * from parametro where id=1001 ', function(err, rows, fields) { // Terceiro CallBack
        	if (err){  console.error('erro de conexão: ' + err.stack); return; }
        	connection.query('SELECT * from parametro where id=1002 ', function(err, rows, fields) { // Quarto CallBack
        		if (err){  console.error('erro de conexão: ' + err.stack); return; }
        		connection.query('SELECT * from endereco where id=1003', function(err, rows, fields) { // Quinto CallBack
        			if (err){  console.error('erro de conexão: ' + err.stack); return; }
        			connection.query('SELECT * from cursos where id=433', function(err, rows, fields) { // Sexto CallBack
        				if (err){  console.error('erro de conexão: ' + err.stack); return; }
        				console.log('Ufa, chegamos...');
        				connection.end();
        			}
        		}
        	}
        }
    }
)});




