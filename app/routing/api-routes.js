/**
 * Created by juanitasoranno on 10/27/16.
 */
module.exports = function(app) {


    app.use('/', function (req, res) {
        //path for html page to render here
    });

    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });

};

//remember to save yourself to the array AFTER difference