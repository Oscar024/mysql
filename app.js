var express = require('express');
var app = express();
var mysql   = require('mysql');



app.get('/', function (req, res) {
    res.send('Hello World!');
});




var connection = mysql.createConnection({
    host     :  "",
    user     : "",
    password : "",
    database : ""
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ');
        return;
    }

    console.log('connected  ' );
});



//connection.query('CREATE TABLE Persons (PersonID int NOT NULL, PersonAge int, name varchar(50),PRIMARY KEY (PersonID))', function (error, results) {
  //if (error) throw error;

//});

connection.query('INSERT INTO Persons (PersonID, PersonAge , name )VALUES(5,25,"OSCAR")', function (error, results) {
    if (error) throw error;

});



connection.query('SELECT * FROM `Persons`', function (error, results, fields) {
    var i=0;
    if (error) throw error;
    for (i,len = results.length; i < len; i++) {
        //TODO: body...
        console.log('The solution is: ', results[i]);
    }

});



connection.end(function(err) {
    // The connection is terminated now
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

