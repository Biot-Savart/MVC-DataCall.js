//Created by Ryno Myburgh (Biot-Savart)

var MVC_DataCall =
    {
        dfd: jQuery.Deferred(),
        getJsonPost: function (controller, method, jsonObjectString) {
            var dfd = jQuery.Deferred();

            $.ajax({
                url: '../' + controller + '/' + method,
                data: jsonObjectString,
                contentType: 'application/json',
                dataType: 'json',
                type: 'POSt',
                success: function (data) {                    
                    dfd.resolve(data);                   
                },
                error: function (err) {
                    dfd.reject(err);
                }
            });

            return dfd.promise();
        },
        getJson: function (controller, method, jsonObjectString) {
            var dfd = jQuery.Deferred();

            $.ajax({
                url: '../' + controller + '/' + method,
                data: jsonObjectString,
                contentType: 'application/json',
                dataType: 'json',               
                success: function (data) {
                    dfd.resolve(data);
                },
                error: function (err) {
                    dfd.reject(err);
                }
            });

            return dfd.promise();
        },
        getViewPost: function (controller, method, jsonObjectString) {
            var dfd = jQuery.Deferred();

            $.ajax({
                url: '../' + controller + '/' + method,
                data: jsonObjectString,
                contentType: 'application/json',
                type: 'POSt',
                success: function (data) {
                    dfd.resolve(data);
                },
                error: function (err) {
                    dfd.reject(err);
                }
            });

            return dfd.promise();
        },
        getView: function (controller, method, jsonObjectString) {
            var dfd = jQuery.Deferred();

            $.ajax({
                url: '../' + controller + '/' + method,
                data: jsonObjectString,
                contentType: 'application/json',               
                success: function (data) {
                    dfd.resolve(data);
                },
                error: function (err) {
                    dfd.reject(err);
                }
            });

            return dfd.promise();
        }
    }