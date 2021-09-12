// var h1= document.getElementById('heading');
// var txt = document.getElementById('txt');

// txt.addEventListener('keyup',keypress);

// function keypress() {
//     h1.innerText =txt.value;
// }
//alert('inside part 1');

var btn=document.getElementById('load');
var cnt= document.getElementById('container');
var url='https://learnwebcode.github.io/json-example/pets-data.json';


define([
    'text!views/template/test.tmpl',
    'handlebar'
    
],

function(templ,handlebar) {
    //'use strict';
    //alert('inside define');
    //console.log(templ);
    var compiled= handlebar.compile(templ);
    //console.log(compiled);
    btn.addEventListener('click',FetchData);

    function FetchData() {
        var req= new XMLHttpRequest();
        req.open('GET',url);
        req.onload= function() {
            //LoadHTML(JSON.parse(req.responseText));
            //console.log(JSON.parse(req.responseText));
            var data= JSON.parse(req.responseText);
            var gen_tmpl= compiled(data);
            cnt.innerHTML=gen_tmpl;
            //console.log(gen_tmpl);
        }
        req.send();
    }

    //function LoadHTML(data) {

    //}
});

//alert('test');