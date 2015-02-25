function FunctionPlayers() {
    //Gets the names of the players entered by the user
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var player3 = document.getElementById("player3").value;
    var player4 = document.getElementById("player4").value;
    var player5 = document.getElementById("player5").value;
    var player6 = document.getElementById("player6").value;
    //Prints on the scoreboard the names of the players
    document.getElementById("p1").innerHTML = player1;
    document.getElementById("p2").innerHTML = player2;
    document.getElementById("p3").innerHTML = player3;
    document.getElementById("p4").innerHTML = player4;
    document.getElementById("p5").innerHTML = player5;
    document.getElementById("p6").innerHTML = player6;
    //Makes the form disappear once the names have been submitted
    var elem1= document.getElementById("myForm");
    elem1.parentNode.removeChild(elem1);
    var elem2= document.getElementById("Enterplayers");
    elem2.parentNode.removeChild(elem2);
}