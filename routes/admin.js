var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');

// let sql = "SELECT * FROM bar; SELECT * FROM missions";
/* GET administration page */
router.get('/', function(req, res, next) {

  let barList = [];
  connection.query("SELECT * FROM bar", function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
        // console.log(rows);
	  		// Loop check on each row
	  		for (var i = 0; i < rows.length; i++) {

	  			// Create an object to save current row's data
		  		var bar = {
		  			'name':rows[i].name,
		  			'numbers':rows[i].numbers,
		  			'picto':rows[i].picto
		  		}
		  		// Add object into array
		  		barList.push(bar);
	  	}

	  	// Render index.pug page using array
      res.render('admin', { bodyClass:'admin', 'barList': barList});
	  	}
    });
    // let workList = [];
    // connection.query(sql, function(err, rows, fields) {
  	//   	if (err) {
  	//   		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
  	//   	} else {
  	//   		// Loop check on each row
  	//   		for (var i = 0; i < rows.length; i++) {
    //
  	//   			// Create an object to save current row's data
  	// 	  		var work = {
  	// 	  			'nom':rows[i].nom_poste,
  	// 	  			'recruteur':rows[i].recruteur,
  	// 	  			'duree':rows[i].duree
  	// 	  		}
  	// 	  		// Add object into array
  	// 	  		workList.push(work);
  	//   	}
    //
  	//   	// Render index.pug page using array
    //     res.render('admin', {'workList': workList});
  	//   	}
    //   });
}); // fin de l'appel au get

module.exports = router;
