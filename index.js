// 1st img

var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceOutput = "images/dice"+ randomNumber1+".png";

document.querySelector(".img1").setAttribute("src", diceOutput);

// 2nd img

var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceOutput = "images/dice"+ randomNumber2+".png";

document.querySelector(".img2").setAttribute("src", diceOutput);

// condition

if(randomNumber1 === randomNumber2)
{
  document.querySelector("h1").textContent = "Draw !!!"
}
else if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").textContent = "P1, You the man !!!"
}
else
{
  document.querySelector("h1").textContent = "P2, You're drunk !!!"  
}
