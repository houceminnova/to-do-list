function add(){
     var x=document.getElementById("sam").value;
     var j =localStorage.length;
localStorage.setItem(j,x)
}
function show(){
    var x = [];
    for(let i=0;i<localStorage.length;i++){
         x.push(localStorage.getItem(i))
    }
document.getElementById('oo').innerHTML =x.join(' ')


}



function delet()
{
    localStorage.removeItem("name");
    document.getElementById("oo").innerHTML="";
}