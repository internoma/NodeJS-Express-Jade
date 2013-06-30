
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