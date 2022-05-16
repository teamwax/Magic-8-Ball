function shake(){

    var ball= document.getElementById("ball")
    var messageText = document.getElementById("message")
 
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
    ball.classList.add("shake");
 
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
    
    setTimeout(function(){ getFortune(); }, 1500);
 }
 
 
 function getFortune(){
     var fortunes = ['It will happen girl', 'It is in the cars for u', 'one thousand percent', 'YES! Forsure!', 'Meditate on this', 'As far as I know..yes', 'yeah probably', 'It is lookin good for u girl', 'I asked the universe and she said yeah', 'Idk about this one', 'give me another shake', 'I am hella tired, try again later', 'I will let u figure this out', 'Powers recharging, come back soon ', 'Breathe deep and try again', 'Dont get your hopes up for this one', 'Girl its a no from me', 'What I am hearing is no', 'take cover because its not lookin good', 'sorry girl, maybe not']
 
     var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
 
     var parent = document.getElementById("fortune");
     var newMessage = document.createElement("div");
     newMessage.setAttribute('id', "message");
     newMessage.innerHTML = "\""+fortune+"\"";
     parent.appendChild(newMessage);
 }
