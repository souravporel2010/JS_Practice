//var url='https://learnwebcode.github.io/json-example/pets-data.json';
var url='https://learnwebcode.github.io/json-example/animals-1.json';
var div= document.getElementById('container');


var btn= document.getElementById('clickMe');
btn.addEventListener('click',APICall);
function createhtml(req)
{
    var data = JSON.parse(req.responseText);
    var tmpl =document.getElementById('t_template').innerHTML;
    var compiledtmpl= Handlebars.compile(tmpl);
    var gen_tmpl= compiledtmpl(data);
    div.innerHTML=gen_tmpl;
}
function APICall()
{
    var req= new XMLHttpRequest();
    
    req.open('GET',url);
    req.onload = function() {
        if(req.status===200 && req.readyState===4) {
            createhtml(req);
        }  
    };
    req.send();
}

