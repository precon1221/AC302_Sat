console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");




var fortnite = new Image();
fortnite.src = "download (1).jpeg"

fortnite.onload = function(){
	ctx.drawImage(fortnite, 75,75,150,150)
}



var mario = new Image();
mario.src = "mario-pose4.png"

mario.onload = function(){
	ctx.drawImage(mario, 150,150,150,150)
	ctx2.drawImage(mario, 150,250,150,150)
}

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillStyle = "cyan";
ctx2.fillRect(0,0,800,350)

ctx2.fillStyle = "green";
ctx2.fillRect(0,350,800,150)



