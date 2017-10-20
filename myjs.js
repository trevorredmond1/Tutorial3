var chatStr = "";

function replaceEmojis(){
    chatStr = chatStr.replace(":thinkdrops:", "<img class='emoji' src='Image/thinkdrops.png' />");
    chatStr = chatStr.replace(":thinking:", "<img class='emoji' src='Image/thinking.png' />");
    chatStr = chatStr.replace(":b:", "<img class='emoji' src='Image/b.png' />");
    chatStr = chatStr.replace(":eyes:", "<img class='emoji' src='Image/eyes.png' />");
    chatStr = chatStr.replace(":joy:", "<img class='emoji' src='Image/joy.png' />");
    chatStr = chatStr.replace(":ok_hand:", "<img class='emoji' src='Image/okhand.png' />");
    chatStr = chatStr.replace(":think2:", "<img class='emoji' src='Image/think2.png' />"); 
    chatStr = chatStr.replace(":100:", "<img class='emoji' src='Image/100.png' />");
    chatStr = chatStr.replace("boogie", "***");
    chatStr = chatStr.replace("sleep", "***");
    chatStr = chatStr.replace("bleh", "***");
}

/*------------p1Chat-------------*/
function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = "";
    
    /*if (chatStr == ":thinkdrops:"){
        chatStr = "<img class='emoji' src='Image/thinkdrops.png' />";
    } else if(chatStr == ":thinking:"){
        chatStr = "<img class ='emoji' src = 'Image/thinking.png' />";
    }*/
    
    replaceEmojis();
}

/*----------------p2Chat-----------*/
function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
    
    replaceEmojis();
  
}

/*------------chatDisplay----------------*/
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    
    if(chatNum == 1){
        ndiv.style.backgroundColor = "#AFA";
    } else if (chatNum == 2){
        ndiv.style.backgroundColor = "#AAF";
    }
    
    ndiv.style.padding = "10px";
    
    
    document.getElementById("chatDisplay").appendChild(ndiv);
}

/*------------Interactions--------------*/
document.getElementById("p1Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr();
        createChat(1);
    }
});

document.getElementById("p2Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr2();
        createChat(2);
    }
});