const request = require('request');//request=petición

const json = {
    "nombre": "Diana",
    "apellido": "Miramontes",

};

request.post({
    url: 'http://localhost:3002/users',
    body: json,
    json: true,
}, function (error, response, body){
    console.log(body);
});