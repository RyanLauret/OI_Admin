
        const { ready } = require('jquery');
        var mysql = require('mysql');
        
                function el(selector) {
                    return document.getElementById(selector);
                }
        
                    // Get the mysql service
                    displayData(function(rows){
                        var html = '';
                        rows.forEach(function(row){
                            html += "<tr><td>"+row.id+"</td><td>"+row.nom+"</td><td>"+row.prenom+"</td><td>"+row.email+"</td><td>"+row.rue +" "+ row.codePostal+"</td><td>"+row.tel+"</td></tr>"

                            console.log(row);
                        });
        
                        document.querySelector('.tbody').innerHTML = html;

                        $(document).ready(function() {
                            $('#table_id').DataTable({
                                language: {
                                    url: 'Datatable/french.json'
                                },
                                bInfo:false
                            });
                        } );
                    });
        
                function displayData(callback){
                    var mysql = require('mysql');
        
                    // Add the credentials to access your database
                    var connection = mysql.createConnection({
                        host     : 'localhost',
                        user     : 'root',
                        password : '',
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
                    $query = 'SELECT * from client';
        
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
            
                
        
        
