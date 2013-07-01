
/*
 * GET page.
 */

var $autor = 'Alfredo González P.';
var $date = 2013;
var $version = '0.0.1a';

exports.index = function(req, res){
  res.render('index', {
  	title   : 'Pruebas con Express',
  	autor   : $autor,
  	date    : $date,
  	version : $version
  });
};

exports.pagina = function(req, res){
  res.render('pagina', {
  	title   : 'Pruebas de página con Express',
  	autor   : $autor,
  	date    : $date,
  	version : $version
  });
};

exports.formulario = function(req, res){
  res.render('formulario', {
    title   : 'Pruebas de formularios con Express',
    autor   : $autor,
    date    : $date,
    version : $version
  });
};

exports.respuesta = function(req, res){
  res.render('respuesta', {
    title   : 'Prueba de respuesta a formularios con Express',
    autor   : $autor,
    date    : $date,
    version : $version,
    palabra : req.body.palabra
  });
};