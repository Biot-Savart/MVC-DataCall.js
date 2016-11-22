# MVC-DataCall.js

JavaScript function to make calling MVC controller methods easier using ajax.

# Implementation
   
    DataCall.getJsonPost('Controller', 'Methos', JSON.stringify({ var1_name: var1, var2_name: var2 })).done(function (data) 
    {
       //use data
    }).fail(function (res) {
       //use error
    });

# Prerequisites

* jQuery

