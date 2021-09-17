function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

idVet = $_GET('idVet')
console.log(idVet)


const { ready } = require('jquery');
var mysql = require('mysql');

        function el(selector) {
            return document.getElementById(selector);
        }

            // Get the mysql service
            displayData(function(rows){
                var html = '';
                rows.forEach(function(row){
                    var categ = {"1":"Robe","2":"T-Shirt et Debardeurs","3":"Jeans","4":"Pull","5":"Short","6":"Jupes","7":"Gilets","8":"Vestes & Manteaux","9":"Chemisiers & Tuniques","11":"Pantacourts","12":"Pantalons"};
                    html += '<div class="boxinfo"> <h1>'+row.vnom+'</h1><p>Catégorie : '+categ[row.idCateg]+'</p> <p>Description :<br>'+row.description+'</p><p>Taille(s) disponible(s) : '+row.listeTailleDispo+'</p><p>Prix unitaire : '+row.prix+' €</p></div><div class="img"><img src="img/vetement/id'+row.id+'.jpg" alt=""></div>';
                    console.log(row);
                    

                    $(document).ready(function () {
                        $(".container").fadeIn(1000)
            
                    })
                    
                    $("#next").click(function(){
                        $(".container").fadeOut()
                        var next = row.id+1
                        // ---------------------------------------------
                        // faire en sorte de ne pas depasser l'id maximum
                        window.location.replace("produit.html?idVet="+next)
                    })

                    $("#previous").click(function(){
                        $(".container").fadeOut()
                        var previous = row.id-1
                        if (previous==0) {
                            previous=1
                        }
                        window.location.replace("produit.html?idVet="+previous)
                    })


                });

                document.querySelector('.container').innerHTML = html;
            });

        function displayData(callback){
            var mysql = require('mysql');

            // Add the credentials to access your database
            var connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : 'root',
                database : 'bhl_clothes'
            });

            // connect to mysql
            connection.connect(function(err) {
                // in case of error
                if(err){
                    console.log(err.code);
                    console.log(err.fatal);
                }
            });

            // Perform a query
            $query = 'SELECT distinct vetement.id, idCateg, vetement.nom vnom, vetement.prix, view.listeTailleDispo, vetement.description  from vetement inner join vue_vet_disponibilite view on view.idVet = vetement.id inner join vet_couleur color on color.idVet = vetement.id where vetement.id='+idVet;
            
            
            ;

            connection.query($query, function(err, rows, fields) {
                if(err){
                    console.log("An error ocurred performing the query.");
                    console.log(err);
                    return;
                }

                callback(rows);

                console.log("Query succesfully executed");
            });

            // Close the connection
            connection.end(function(){
                // The connection has been closed
            });
        }
    //    $(document).ready(function(){
    //     $(".container").hide()
    //        $(".container").delay(250).fadeIn()
    //    })
    
        

