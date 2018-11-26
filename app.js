var app = require('./config/server');

//cria o servidor e fica ouvindo na porta 3000
app.listen(3000, function(){

    console.log('Server ON');

});