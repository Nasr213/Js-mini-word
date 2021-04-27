setInterval(function() {var col = document.getElementById("color");
var tail = document.getElementById("taille");
var pol = document.getElementById("police");
var para = document.getElementById("par");
col.style.backgroundColor=col.value;
para.style.color=col.value;
para.style.fontSize=tail.value+"px";
para.style.fontFamily=pol.value;},500);