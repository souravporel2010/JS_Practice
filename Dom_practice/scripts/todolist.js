var btnAdd= document.getElementById('add');
var txt =document.getElementById('txt');
var tasklist_con= document.getElementById('tasklist');


btnAdd.addEventListener('click', AddTask);


function AddTask() 
{
    var txtvalue= txt.value;
    if(txtvalue!==null && txtvalue !=='') 
    {
        txt.value='';
        var div = document.createElement('div');
        var p= document.createElement('p');
        p.innerText=txtvalue;
        var del = document.createElement('button');
        del.innerText='Delete';
        del.onclick = function() {
            tasklist_con.removeChild(div);
        }
        div.appendChild(p);
        div.appendChild(del);
        tasklist_con.appendChild(div);
        
    } 
    


}