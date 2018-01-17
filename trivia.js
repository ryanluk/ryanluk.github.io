var score = 0



var sound1 = new Audio('sounds/Good.mp3');
var sound2 = new Audio('sounds/Bad.mp3');
var sound3 = new Audio('sounds/Over.mp3');
var sound4 = new Audio('sounds/Under.mp3');


var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        





        score++

document.searchImage.src = "images/Check.png"
sound1.play("Good.mp3")
    }
    else {
        document.getElementById("question").value="You are wrong"

document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"

         score++
    
document.searchImage.src = "images/Check.png"
sound1.play("Good.mp3")
}
    else {
        document.getElementById("question").value="You are wrong"
        
    
document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
}
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"

         score++
document.searchImage.src = "images/Check.png"
sound1.play("Good.mp3")
}
    else {
        document.getElementById("question").value="You are wrong"
        
    
document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
}
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"

         score++
    
document.searchImage.src = "images/Check.png"
sound1.play("Good.mp3")
}
    else {
        document.getElementById("question").value="You are wrong"

document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
}
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
document.searchImage.src = "images/Check.png"
sound1.play("Good.mp3")
}
    else {
        document.getElementById("question").value="You are wrong"

document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
}
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"

         score++
document.searchImage.src = "images/Check.png"
sound1.play("Good.mp3")
}
    else {
        document.getElementById("question").value="You are wrong"

document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
}
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"

         score++
document.searchImage.src = "images/Check.png"


sound1.play("Good.mp3")
}
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
}
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"

         score++

document.searchImage.src = "images/Check.png"
sound1.play("Good.mp3")
}
    else {
        document.getElementById("question").value="You are wrong"

document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
}
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"


         score++
    
document.searchImage.src = "images/Check.png"
sound1.play("Good.mp3")
}
    else {
        document.getElementById("question").value="You are wrong"

document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
}
    document.view.qscore.value=score
}

else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
document.searchImage.src = "images/Check.png"
sound1.play("Good.mp3")
    }
    else {
        document.getElementById("question").value="You are wrong"
document.searchImage.src = "images/Incorrect.png"
sound2.play("Bad.mp3")
    }
    document.view.qscore.value=score
}

	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="Which type is not the three starter typings? \na)Water \nb)Fire \nc)Electric \nd)Grass";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is a generation I pokemon? \na)Greninja \nb)Snorlax \nc)Lucario \nd)Togepi";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many pokemon gyms are usually in a region? \na)8 \nb)4 \nc)12 \nd)0";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is a legendary pokemon? \na)Suicune \nb)Genesect \nc)Jirachi \nd)Deoxys";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is not part of an evolution chain? \na)Pikachu \nb)Groudon \nc)Klefki \nd)Meowstic";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="How many pokemon are there in total? \na)807 \nb)151 \nc)905 \nd)777";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is a pseudo legendary? \na)Flygon \nb)Haxorus \nc)Goodra \nd)Noivern";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was the first pokemon ever developed? \na)Pikachu \nb)Rhydon \nc)Mewtwo \nd)Bulbasaur";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the name of the region in generation VI (pokemon x and y)? \na)Alola \nb)Hoenn \nc)Kalos \nd)Sinnoh";
    document.view.qans.value=""
}

else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is not a pokemon trio? \na)Uxie, Azelf, Mesprit \nb)Charmander, Squirtle, Pikachu \nc)Kyogre, Groudon, Rayquaza \nd)Landorus, Thundurus, Tornadus";
    document.view.qans.value=""
}

else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")

if (score >= 5) {
	sound3.play('Over.mp3');
}
else {
	sound4.play('Under.mp3');
}
}
	i++; 
}
