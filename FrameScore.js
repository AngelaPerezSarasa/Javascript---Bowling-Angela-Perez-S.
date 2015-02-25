function TotalScore(jugador)
{
    var total = 0;

	for(var i = 1; i <= 10; i++) //Frames
	{
		if(i < 10) // Frames 1-9 (normal score)
		{
			if(document.getElementById("f" + i + "p" + jugador + "t").innerHTML == "/") //spare
			{
				total += 10 + (document.getElementById("f" + (i+1) + "p" + jugador + "b1t").innerHTML.replace(" ", "") != "" ? parseInt(document.getElementById("f" + (i+1) + "p" + jugador + "b1t").innerHTML) : 0);
			}
			else if(document.getElementById("f" + i + "p" + jugador + "t").innerHTML == "X") //strike
			{
				total += 10 + (document.getElementById("f" + (i+1) + "p" + jugador + "b1t").innerHTML.replace(" ", "") != "" ? parseInt(document.getElementById("f" + (i+1) + "p" + jugador + "b1t").innerHTML) : 0);
				
				if(document.getElementById("f" + (i+1) + "p" + jugador + "b2t").innerHTML.replace(" ", "") != "")
					total += parseInt(document.getElementById("f" + (i+1) + "p" + jugador + "b2t").innerHTML);
				else
					total += document.getElementById("f" + (i+2) + "p" + jugador + "b1t").innerHTML.replace(" ", "") != "" ? parseInt(document.getElementById("f" + (i+2) + "p" + jugador + "b1t").innerHTML) : 0;
			}
			else if(document.getElementById("f" + i + "p" + jugador + "t").innerHTML.replace(" ", "")  != "") //When There's any pin left standing
			{
				total += parseInt(document.getElementById("f" + i + "p" + jugador + "t").innerHTML);	
			}
		}
		else // Frame 10
		{
			total += document.getElementById("f" + i + "p" + jugador + "b1t").innerHTML.replace(" ", "") != "" ? parseInt(document.getElementById("f" + i + "p" + jugador + "b1t").innerHTML) : 0;
			total += document.getElementById("f" + i + "p" + jugador + "b2t").innerHTML.replace(" ", "") != "" ? parseInt(document.getElementById("f" + i + "p" + jugador + "b2t").innerHTML) : 0;
			total += document.getElementById("f" + i + "p" + jugador + "b3t").innerHTML.replace(" ", "") != "" ? parseInt(document.getElementById("f" + i + "p" + jugador + "b3t").innerHTML) : 0;
		}
	}
    //Prints the total score for each player
     document.getElementById("p" + jugador + "t").innerHTML = total;
   
}

function FrameScore(){
    //Gets the values from the 'Add Score' form
	var p1b1 = document.getElementById("p1b1").value;
    var p1b2 = document.getElementById("p1b2").value;
    var p2b1 = document.getElementById("p2b1").value;
    var p2b2 = document.getElementById("p2b2").value;
    var p3b1 = document.getElementById("p3b1").value;
    var p3b2 = document.getElementById("p3b2").value;
	var p4b1 = document.getElementById("p4b1").value;
    var p4b2 = document.getElementById("p4b2").value;
    var p5b1 = document.getElementById("p5b1").value;
    var p5b2 = document.getElementById("p5b2").value;
    var p6b1 = document.getElementById("p6b1").value;
    var p6b2 = document.getElementById("p6b2").value;
    var p1b3 = document.getElementById("p1b3").value;
    var p2b3 = document.getElementById("p2b3").value;
    var p3b3 = document.getElementById("p3b3").value;
    var p4b3 = document.getElementById("p4b3").value;
    var p5b3 = document.getElementById("p5b3").value;
    var p6b3 = document.getElementById("p6b3").value;

    //Gets the frame number from the 'Add Score' form
    var frame =document.getElementById("frame").value;
    var f=Number(frame);
    /*Depending on the frame gets the corresponding ids and
    prints the values taken from the form*/ 
    if (f==1){
        document.getElementById("f1p1b1t").innerHTML = p1b1;
        document.getElementById("f1p1b2t").innerHTML = p1b2;
        document.getElementById("f1p2b1t").innerHTML = p2b1;
        document.getElementById("f1p2b2t").innerHTML = p2b2;
        document.getElementById("f1p3b1t").innerHTML = p3b1;
        document.getElementById("f1p3b2t").innerHTML = p3b2;
        document.getElementById("f1p4b1t").innerHTML = p4b1;
        document.getElementById("f1p4b2t").innerHTML = p4b2;
        document.getElementById("f1p5b1t").innerHTML = p5b1;
        document.getElementById("f1p5b2t").innerHTML = p5b2;
        document.getElementById("f1p6b1t").innerHTML = p6b1;
        document.getElementById("f1p6b2t").innerHTML = p6b2;
        var idt=[];
        idt[0]="f1p1t";
        idt[1]="f1p2t";
        idt[2]="f1p3t";
        idt[3]="f1p4t";
        idt[4]="f1p5t";
        idt[5]="f1p6t";

    }else if (f==2){
        document.getElementById("f2p1b1t").innerHTML = p1b1;
        document.getElementById("f2p1b2t").innerHTML = p1b2;
        document.getElementById("f2p2b1t").innerHTML = p2b1;
        document.getElementById("f2p2b2t").innerHTML = p2b2;
        document.getElementById("f2p3b1t").innerHTML = p3b1;
        document.getElementById("f2p3b2t").innerHTML = p3b2;
        document.getElementById("f2p4b1t").innerHTML = p4b1;
        document.getElementById("f2p4b2t").innerHTML = p4b2;
        document.getElementById("f2p5b1t").innerHTML = p5b1;
        document.getElementById("f2p5b2t").innerHTML = p5b2;
        document.getElementById("f2p6b1t").innerHTML = p6b1;
        document.getElementById("f2p6b2t").innerHTML = p6b2;
        var idt=[];
        idt[0]="f2p1t";
        idt[1]="f2p2t";
        idt[2]="f2p3t";
        idt[3]="f2p4t";
        idt[4]="f2p5t";
        idt[5]="f2p6t";
    }else if (f==3){
        document.getElementById("f3p1b1t").innerHTML = p1b1;
        document.getElementById("f3p1b2t").innerHTML = p1b2;
        document.getElementById("f3p2b1t").innerHTML = p2b1;
        document.getElementById("f3p2b2t").innerHTML = p2b2;
        document.getElementById("f3p3b1t").innerHTML = p3b1;
        document.getElementById("f3p3b2t").innerHTML = p3b2;
        document.getElementById("f3p4b1t").innerHTML = p4b1;
        document.getElementById("f3p4b2t").innerHTML = p4b2;
        document.getElementById("f3p5b1t").innerHTML = p5b1;
        document.getElementById("f3p5b2t").innerHTML = p5b2;
        document.getElementById("f3p6b1t").innerHTML = p6b1;
        document.getElementById("f3p6b2t").innerHTML = p6b2;
        var idt=[];
        idt[0]="f3p1t";
        idt[1]="f3p2t";
        idt[2]="f3p3t";
        idt[3]="f3p4t";
        idt[4]="f3p5t";
        idt[5]="f3p6t";
    }else if (f==4){
        document.getElementById("f4p1b1t").innerHTML = p1b1;
        document.getElementById("f4p1b2t").innerHTML = p1b2;
        document.getElementById("f4p2b1t").innerHTML = p2b1;
        document.getElementById("f4p2b2t").innerHTML = p2b2;
        document.getElementById("f4p3b1t").innerHTML = p3b1;
        document.getElementById("f4p3b2t").innerHTML = p3b2;
        document.getElementById("f4p4b1t").innerHTML = p4b1;
        document.getElementById("f4p4b2t").innerHTML = p4b2;
        document.getElementById("f4p5b1t").innerHTML = p5b1;
        document.getElementById("f4p5b2t").innerHTML = p5b2;
        document.getElementById("f4p6b1t").innerHTML = p6b1;
        document.getElementById("f4p6b2t").innerHTML = p6b2;
        var idt=[];
        idt[0]="f4p1t";
        idt[1]="f4p2t";
        idt[2]="f4p3t";
        idt[3]="f4p4t";
        idt[4]="f4p5t";
        idt[5]="f4p6t";
    }else if (f==5){
        document.getElementById("f5p1b1t").innerHTML = p1b1;
        document.getElementById("f5p1b2t").innerHTML = p1b2;
        document.getElementById("f5p2b1t").innerHTML = p2b1;
        document.getElementById("f5p2b2t").innerHTML = p2b2;
        document.getElementById("f5p3b1t").innerHTML = p3b1;
        document.getElementById("f5p3b2t").innerHTML = p3b2;
        document.getElementById("f5p4b1t").innerHTML = p4b1;
        document.getElementById("f5p4b2t").innerHTML = p4b2;
        document.getElementById("f5p5b1t").innerHTML = p5b1;
        document.getElementById("f5p5b2t").innerHTML = p5b2;
        document.getElementById("f5p6b1t").innerHTML = p6b1;
        document.getElementById("f5p6b2t").innerHTML = p6b2;
        var idt=[];
        idt[0]="f5p1t";
        idt[1]="f5p2t";
        idt[2]="f5p3t";
        idt[3]="f5p4t";
        idt[4]="f5p5t";
        idt[5]="f5p6t";
    }else if (f==6){
        document.getElementById("f6p1b1t").innerHTML = p1b1;
        document.getElementById("f6p1b2t").innerHTML = p1b2;
        document.getElementById("f6p2b1t").innerHTML = p2b1;
        document.getElementById("f6p2b2t").innerHTML = p2b2;
        document.getElementById("f6p3b1t").innerHTML = p3b1;
        document.getElementById("f6p3b2t").innerHTML = p3b2;
        document.getElementById("f6p4b1t").innerHTML = p4b1;
        document.getElementById("f6p4b2t").innerHTML = p4b2;
        document.getElementById("f6p5b1t").innerHTML = p5b1;
        document.getElementById("f6p5b2t").innerHTML = p5b2;
        document.getElementById("f6p6b1t").innerHTML = p6b1;
        document.getElementById("f6p6b2t").innerHTML = p6b2;
        var idt=[];
        idt[0]="f6p1t";
        idt[1]="f6p2t";
        idt[2]="f6p3t";
        idt[3]="f6p4t";
        idt[4]="f6p5t";
        idt[5]="f6p6t";
    }else if (f==7){
        document.getElementById("f7p1b1t").innerHTML = p1b1;
        document.getElementById("f7p1b2t").innerHTML = p1b2;
        document.getElementById("f7p2b1t").innerHTML = p2b1;
        document.getElementById("f7p2b2t").innerHTML = p2b2;
        document.getElementById("f7p3b1t").innerHTML = p3b1;
        document.getElementById("f7p3b2t").innerHTML = p3b2;
        document.getElementById("f7p4b1t").innerHTML = p4b1;
        document.getElementById("f7p4b2t").innerHTML = p4b2;
        document.getElementById("f7p5b1t").innerHTML = p5b1;
        document.getElementById("f7p5b2t").innerHTML = p5b2;
        document.getElementById("f7p6b1t").innerHTML = p6b1;
        document.getElementById("f7p6b2t").innerHTML = p6b2;
        var idt=[];
        idt[0]="f7p1t";
        idt[1]="f7p2t";
        idt[2]="f7p3t";
        idt[3]="f7p4t";
        idt[4]="f7p5t";
        idt[5]="f7p6t";
    }else if (f==8){
        document.getElementById("f8p1b1t").innerHTML = p1b1;
        document.getElementById("f8p1b2t").innerHTML = p1b2;
        document.getElementById("f8p2b1t").innerHTML = p2b1;
        document.getElementById("f8p2b2t").innerHTML = p2b2;
        document.getElementById("f8p3b1t").innerHTML = p3b1;
        document.getElementById("f8p3b2t").innerHTML = p3b2;
        document.getElementById("f8p4b1t").innerHTML = p4b1;
        document.getElementById("f8p4b2t").innerHTML = p4b2;
        document.getElementById("f8p5b1t").innerHTML = p5b1;
        document.getElementById("f8p5b2t").innerHTML = p5b2;
        document.getElementById("f8p6b1t").innerHTML = p6b1;
        document.getElementById("f8p6b2t").innerHTML = p6b2;
        var idt=[];
        idt[0]="f8p1t";
        idt[1]="f8p2t";
        idt[2]="f8p3t";
        idt[3]="f8p4t";
        idt[4]="f8p5t";
        idt[5]="f8p6t";
    }else if (f==9){
        document.getElementById("f9p1b1t").innerHTML = p1b1;
        document.getElementById("f9p1b2t").innerHTML = p1b2;
        document.getElementById("f9p2b1t").innerHTML = p2b1;
        document.getElementById("f9p2b2t").innerHTML = p2b2;
        document.getElementById("f9p3b1t").innerHTML = p3b1;
        document.getElementById("f9p3b2t").innerHTML = p3b2;
        document.getElementById("f9p4b1t").innerHTML = p4b1;
        document.getElementById("f9p4b2t").innerHTML = p4b2;
        document.getElementById("f9p5b1t").innerHTML = p5b1;
        document.getElementById("f9p5b2t").innerHTML = p5b2;
        document.getElementById("f9p6b1t").innerHTML = p6b1;
        document.getElementById("f9p6b2t").innerHTML = p6b2;
        var idt=[];
        idt[0]="f9p1t";
        idt[1]="f9p2t";
        idt[2]="f9p3t";
        idt[3]="f9p4t";
        idt[4]="f9p5t";
        idt[5]="f9p6t";
    }else if (f==10){
        document.getElementById("f10p1b1t").innerHTML = p1b1;
        document.getElementById("f10p1b2t").innerHTML = p1b2;
        document.getElementById("f10p2b1t").innerHTML = p2b1;
        document.getElementById("f10p2b2t").innerHTML = p2b2;
        document.getElementById("f10p3b1t").innerHTML = p3b1;
        document.getElementById("f10p3b2t").innerHTML = p3b2;
        document.getElementById("f10p4b1t").innerHTML = p4b1;
        document.getElementById("f10p4b2t").innerHTML = p4b2;
        document.getElementById("f10p5b1t").innerHTML = p5b1;
        document.getElementById("f10p5b2t").innerHTML = p5b2;
        document.getElementById("f10p6b1t").innerHTML = p6b1;
        document.getElementById("f10p6b2t").innerHTML = p6b2;
        document.getElementById("f10p1b3t").innerHTML = p1b3;
        document.getElementById("f10p2b3t").innerHTML = p2b3;
        document.getElementById("f10p3b3t").innerHTML = p3b3;
        document.getElementById("f10p4b3t").innerHTML = p4b3;
        document.getElementById("f10p5b3t").innerHTML = p5b3;
        document.getElementById("f10p6b3t").innerHTML = p6b3;
        var idt=[];
        idt[0]="f10p1t";
        idt[1]="f10p2t";
        idt[2]="f10p3t";
        idt[3]="f10p4t";
        idt[4]="f10p5t";
        idt[5]="f10p6t";
    }
	
    /*The form gets String values and we need 
    to change them to numbers*/ 	
    p1b1 = Number(p1b1);
 	p1b2 = Number(p1b2);
    p2b1 = Number(p2b1);
 	p2b2 = Number(p2b2);
    p3b1 = Number(p3b1);
 	p3b2 = Number(p3b2);
    p4b1 = Number(p4b1);
 	p4b2 = Number(p4b2);    
 	p5b1 = Number(p5b1);
 	p5b2 = Number(p5b2);
 	p6b1 = Number(p6b1);
 	p6b2 = Number(p6b2);
    p1b3 = Number(p1b3);
    p2b3 = Number(p2b3);    
    p3b3 = Number(p3b3);
    p4b3 = Number(p4b3);
    p5b3 = Number(p5b3);
    p6b3 = Number(p6b3);
    //Gives the variables the values taken from the form
    var b1=[];
    b1[0]=p1b1;
    b1[1]=p2b1;
    b1[2]=p3b1;
    b1[3]=p4b1;
    b1[4]=p5b1;
    b1[5]=p6b1;
    var b2=[];
    b2[0]=p1b2;
    b2[1]=p2b2;
    b2[2]=p3b2;
    b2[3]=p4b2;
    b2[4]=p5b2;
    b2[5]=p6b2;
    var b3=[];
    b3[0]=p1b3;
    b3[1]=p2b3;
    b3[2]=p3b3;
    b3[3]=p4b3;
    b3[4]=p5b3;
    b3[5]=p6b3;
    //Determines the total score of the frame for each player
    var btot=[];
 	btot[0]=p1b1+p1b2;
 	btot[1]=p2b1+p2b2;
 	btot[2]=p3b1+p3b2;
 	btot[3]=p4b1+p4b2;
 	btot[4]=p5b1+p5b2;
 	btot[5]=p6b1+p6b2;
    
 	var i;

    //Prints the total score of the frame for each player
 	for(i=0;i<6;i++){
        if(btot[i]>10 && f<10){
            //If the value exceeds 10 on a frame we get an alert
            alert("Wrong Score! Total Score can't exceed 10 points");
            b1[i]=0;b2[i]=0;
        }else{
            if (b1[i]==10){
			 document.getElementById(idt[i]).innerHTML = 'X';
		      }else if (b1[i]<10 && btot[i]==10){
			 document.getElementById(idt[i]).innerHTML = '/';
		      }else{
			document.getElementById(idt[i]).innerHTML = btot[i];
            }
            /*Calls the function that determines the total score 
            of the player*/
            TotalScore(i+1); 	
		}
 	}
    
	
}
