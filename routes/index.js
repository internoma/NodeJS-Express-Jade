
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title : 'Pruebas con Express',
  	autor : 'Alfredo González P.',
  	date  : 2013
  });
};