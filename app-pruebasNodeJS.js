
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , sass = require('node-sass');

var app = express();

// all environments
app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(sass.middleware({
	src: __dirname + '/views/sass', //where the sass files are 
	dest: __dirname + '/public', //where css should go
	debug: true, // obvious
  includePaths: [ 'lib/'], // paths in @include sass directives
	outputStyle: 'nested' // 'nested', 'expanded', 'compact', 'compressed'
}));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/pagina', routes.pagina);
app.get('/formulario', routes.formulario);
app.post('/respuesta', routes.respuesta);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express está sirviendo en el puerto ' + app.get('port'));
});
