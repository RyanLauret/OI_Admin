
        const { ready } = require('jquery');
var mysql = require('mysql');

        function el(selector) {
            return document.getElementById(selector);
        }

            // Get the mysql service
            displayData(function(rows){
                var html = '';
                var categ = {"1":"Robe","2":"T-Shirt et Debardeurs","3":"Jeans","4":"Pull","5":"Short","6":"Jupes","7":"Gilets","8":"Vestes & Manteaux","9":"Chemisiers & Tuniques","11":"Pantacourts","12":"Pantalons"};
                console.log()
                rows.forEach(function(row){
                    html += '<tr><td><img src="img/vetement/id'+row.id+'.jpg"></td><td class="contentTabCenter">'+row.nom+'</td><td class="contentTabCenter">'+row.description+'</td><td class="contentTabCenter">'+categ[row.idCateg]+'</td><td class="contentTabCenter"><a class="btn btn-primary" href="produit.html?idVet='+row.id+'">Voir Info</a></td></tr>';
                    console.log(row);
                });

                document.querySelector('.tbody').innerHTML = html;
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
            $query = 'SELECT * from vetement';

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
    
        


       $(document).ready(function() {
        $('#table_id').DataTable({
            language: {
                url: 'Datatable/french.json'
            },
            bInfo:false
        });
    } );