var pro1 = document.getElementById('pro1');
var f1 = document.getElementById('f1')
pro1.onclick = function(e){
    f1.style.display='block';
    e.stopPropagation();
}
document.onclick=function(e){
    f1.style.display="none";
}
