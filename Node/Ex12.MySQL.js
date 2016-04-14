var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'KL',
  password : 'KL2013',
  database : 'KL'
});

console.log('Vou me conectar ao Mysql e fazer uma consulta...');

connection.connect( function(err) { // Primeiro CallBack
    if (err) {
        console.error('erro de conexão: ' + err.stack);
        return;
    }

    connection.query('SELECT * from praticante ', function(err, rows, fields) { // Segundo CallBack
        if (err){
            console.error('erro de conexão: ' + err.stack);
            return;
        }
        console.log('Total de registros:'+rows.length);
        connection.end();
    }
)});

console.log('Continuei executando enquando conectava e lia os dados...');


