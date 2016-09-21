var score1=0;var score2=0; 
var i;var j;var op;var ggg=0;var seuil = 15;var deffQuizz=0;
var score;
var RPVrais=0;var RPFaux = 0;
var lifes = 3;var deff=1;
var time=30;
var timeStart=0;
function timings() {
	if(time>0){time--;}
	document.getElementById("timing1").innerHTML = "Time : "+ time;
	document.getElementById("timing2").innerHTML = "Time : "+ time;
	if(time <= 0)
    {


    	document.getElementById("choix11").style.visibility = "hidden";
    	document.getElementById("choix12").style.visibility = "hidden";
    	document.getElementById("choix13").style.visibility = "hidden";
    	document.getElementById("choix14").style.visibility = "hidden";
    	document.getElementById("choix21").style.visibility = "hidden";
    	document.getElementById("choix22").style.visibility = "hidden";
    	document.getElementById("choix23").style.visibility = "hidden";
    	document.getElementById("choix24").style.visibility = "hidden";
    	

    	if(score1>score2){
        	document.getElementById("question1").innerHTML	= "WINNER";
        	document.getElementById("question2").innerHTML	= "LOSER";
    		
    	}else if (score2>score1) {
        	document.getElementById("question1").innerHTML	= "LOSER";
        	document.getElementById("question2").innerHTML	= "WINNER";
			
		}else{

	    	document.getElementById("question1").innerHTML	= "DRAW";
	    	document.getElementById("question2").innerHTML	= "DRAW";
		}
    	
    }
}
function loadgame() {

	document.getElementById("score1").innerHTML = "score = " + score1;
	document.getElementById("score2").innerHTML = "score = " + score2;
	document.getElementById("timing1").innerHTML ="Time : "+ time;
	document.getElementById("timing2").innerHTML ="Time : "+ time;
	if(timeStart ===0){
		setInterval(timings, 1000);
		timeStart = 1;
	}
	
	var solution;
	var nb1 = Math.floor(Math.random() * 11* deff);
	var nb2 = Math.floor(Math.random() * 11* deff);
	

        j = nb1 = Math.floor(Math.random() * 7);
        if (j == 0) { op = "+";solution=nb1+nb2; }
        if (j == 1) { op = "-";solution=nb1-nb2; }
        if (j == 2) { op = "*";	solution=nb1*nb2; }
        if (j == 3) { op = "/"; nb1 = nb2 * nb1;solution = nb1 / nb2;}
        if (j == 4) { op = "power"; }
        if (j == 5) { op = "quadratica"; }
        if (j == 6) { op = "linearity"; }
    
	document.getElementById("question1").innerHTML = nb1 + " " + op + " " + nb2;
	document.getElementById("question2").innerHTML = nb1 + " " + op + " " + nb2;
	if (op === "power")
    {
        nb1 = Math.floor(Math.random() * 11);
        nb2 = Math.floor(Math.random() * 4);
        solution = 1;
        for(ggg=0;ggg< nb2; ggg++)
        {

            solution = solution*nb1;
        }
        if (nb2 === 0)
        {
        	document.getElementById("question1").innerHTML =  nb1 + " º";
        	document.getElementById("question2").innerHTML =  nb1 + " º";
        }
        if (nb2 === 1)
        {
        	document.getElementById("question1").innerHTML =  nb1 + " ¹";
        	document.getElementById("question2").innerHTML =  nb1 + " ¹";
        }
        if (nb2 === 2)
        {
        	document.getElementById("question1").innerHTML =  nb1 + " ²";
        	document.getElementById("question2").innerHTML =  nb1 + " ²";
        }
        if (nb2 === 3)
        {
        	document.getElementById("question1").innerHTML =  nb1 + " ³";
        	document.getElementById("question2").innerHTML =  nb1 + " ³";
        }
    }
	
	 if (op === "linearity")
	    {

	        var bb;
	        var a1, b, c;
	        a1 = Math.floor(Math.random() * 9) + 1;
	        b = Math.floor(Math.random() * 20) + 5;
	        bb = a1 * (Math.floor(Math.random() * 4) + 1);
	        c = b - bb;
	        if (c >= 0)
	        {
	        	document.getElementById("question1").innerHTML = a1 + "x +" + c + " = " + b;
	        	document.getElementById("question2").innerHTML = a1 + "x +" + c + " = " + b;
	        }
	        else if (c < 0)
	        {
	        	document.getElementById("question1").innerHTML = a1 + "x " + c + " = " + b;
	        	document.getElementById("question2").innerHTML = a1 + "x " + c + " = " + b;
	        }

	        solution = ((b - c) / a1);
	        seuil = 5;

	    }
	
	var choix1 = Math.floor(Math.random() * seuil)+1 + solution;
    var choix2 = 0;
    var choix3 = 0;
    while (choix1 === choix2 || choix2 === choix3 || choix1 === choix3 || choix2 === choix3 || choix1 === solution || choix2 === solution || choix3 === solution)
    {
        choix2 = Math.floor(Math.random() * seuil)+1 + solution; choix3= Math.floor(Math.random() * seuil)+1 + solution;
    } 
    
    
	i= Math.floor((Math.random() * 4));
	if (i === 0)
    {
		document.getElementById("choix11").innerHTML = solution;
		document.getElementById("choix12").innerHTML = choix1;
		document.getElementById("choix13").innerHTML =  choix2;
		document.getElementById("choix14").innerHTML =  choix3;
		document.getElementById("choix21").innerHTML = solution;
		document.getElementById("choix22").innerHTML = choix1;
		document.getElementById("choix23").innerHTML =  choix2;
		document.getElementById("choix24").innerHTML =  choix3;
    }
    if (i === 1)
    {
    	document.getElementById("choix11").innerHTML =  choix1;
    	document.getElementById("choix12").innerHTML =  solution;
    	document.getElementById("choix13").innerHTML = choix2;
    	document.getElementById("choix14").innerHTML =  choix3;
    	document.getElementById("choix21").innerHTML =  choix1;
    	document.getElementById("choix22").innerHTML =  solution;
    	document.getElementById("choix23").innerHTML = choix2;
    	document.getElementById("choix24").innerHTML =  choix3;
    }
    if (i === 2)
    {
    	document.getElementById("choix11").innerHTML =  choix1;
    	document.getElementById("choix12").innerHTML = choix2;
    	document.getElementById("choix13").innerHTML =  solution;
    	document.getElementById("choix14").innerHTML =  choix3;
    	document.getElementById("choix21").innerHTML =  choix1;
    	document.getElementById("choix22").innerHTML = choix2;
    	document.getElementById("choix23").innerHTML =  solution;
    	document.getElementById("choix24").innerHTML =  choix3;
    }
    if (i === 3)
    {
    	document.getElementById("choix11").innerHTML =  choix1;
    	document.getElementById("choix12").innerHTML =  choix2;
    	document.getElementById("choix13").innerHTML =  choix3;
    	document.getElementById("choix14").innerHTML =  solution;
    	document.getElementById("choix21").innerHTML =  choix1;
    	document.getElementById("choix22").innerHTML =  choix2;
    	document.getElementById("choix23").innerHTML =  choix3;
    	document.getElementById("choix24").innerHTML =  solution;
    }
    
    if (op === "quadratica")
    {
        var delta = 0;
        var a, b, c = 0, entier1, entier2;
        a = Math.floor(Math.random() * 4) + 1;
        entier1 = Math.floor(Math.random() * 3);
        entier2 = Math.floor(Math.random() * 3) + 2;
        b = -(entier1 + entier2) * a;
        delta = ((entier2 - entier1) * a);
        delta = delta * delta;
        c = ((b * b) - delta) / (4 * a);

        if (b < 0)
        {
        	document.getElementById("question1").innerHTML  = a + " x² " + b + " x ";
        	document.getElementById("question2").innerHTML  = a + " x² " + b + " x ";
        }
        else
        {
        	document.getElementById("question1").innerHTML = a + " x² + " + b + " x ";
        	document.getElementById("question2").innerHTML = a + " x² + " + b + " x ";
        }
        if (c < 0)
        {
        	document.getElementById("question1").innerHTML  = document.getElementById("question1").innerHTML+c+" = 0";
        	document.getElementById("question2").innerHTML  = document.getElementById("question2").innerHTML+c+" = 0";
        }
        else
        {
        	document.getElementById("question1").innerHTML  = document.getElementById("question1").innerHTML +" + "+c+" = 0";
        	document.getElementById("question2").innerHTML  = document.getElementById("question2").innerHTML +" + "+c+" = 0";
        }

        var solutionCh = "x = [" + entier1 + "," + entier2 + "]";
        var choixx1 = "x = [" + (entier1 + 1) + "," + entier2  + "]";
        var choixx2 = "x = [" + entier1+ "," + (entier2 + 2) + "]";
        var choixx3="x = [" + (entier1 + 2) + "," + (entier2 + 1) + "]";

        if (i === 0)
        {
        	document.getElementById("choix11").innerHTML = solutionCh;
        	document.getElementById("choix12").innerHTML = choixx1;
        	document.getElementById("choix13").innerHTML = choixx2;
        	document.getElementById("choix14").innerHTML = choixx3;
        	document.getElementById("choix21").innerHTML = solutionCh;
        	document.getElementById("choix22").innerHTML = choixx1;
        	document.getElementById("choix23").innerHTML = choixx2;
        	document.getElementById("choix24").innerHTML = choixx3;
        }
        if (i === 1)
        {
        	document.getElementById("choix11").innerHTML = choixx1;
        	document.getElementById("choix12").innerHTML = solutionCh;
        	document.getElementById("choix13").innerHTML = choixx2;
        	document.getElementById("choix14").innerHTML = choixx3;
        	document.getElementById("choix21").innerHTML = choixx1;
        	document.getElementById("choix22").innerHTML = solutionCh;
        	document.getElementById("choix23").innerHTML = choixx2;
        	document.getElementById("choix24").innerHTML = choixx3;
        }
        if (i === 2)
        {
        	document.getElementById("choix11").innerHTML = choixx1;
        	document.getElementById("choix12").innerHTML = choixx2;
        	document.getElementById("choix13").innerHTML = solutionCh;
        	document.getElementById("choix14").innerHTML = choixx3;
        	document.getElementById("choix21").innerHTML = choixx1;
        	document.getElementById("choix22").innerHTML = choixx2;
        	document.getElementById("choix23").innerHTML = solutionCh;
        	document.getElementById("choix24").innerHTML = choixx3;
        }
        if (i === 3)
        {
        	document.getElementById("choix11").innerHTML = choixx1;
        	document.getElementById("choix12").innerHTML = choixx2;
        	document.getElementById("choix13").innerHTML = choixx3;
        	document.getElementById("choix14").innerHTML = solutionCh;
        	document.getElementById("choix21").innerHTML = choixx1;
        	document.getElementById("choix22").innerHTML = choixx2;
        	document.getElementById("choix23").innerHTML = choixx3;
        	document.getElementById("choix24").innerHTML = solutionCh;
        }
    }
}

function checkUnser(indiceBt,player) {
	if (i === indiceBt)
    {
       if(player===1){
    	   score1++;
    	   document.getElementById("score1").innerHTML = "score = " + score1;
       }
       if(player===2){
    	   score2++;
    	   document.getElementById("score2").innerHTML = "score = " + score2;
       }
            loadgame();
        


    }
    else
    {


    	if(player===1){
     	   score1--;
     	  document.getElementById("score1").innerHTML = "score = " + score1;
        }
        if(player===2){
     	   score2--;
     	 document.getElementById("score2").innerHTML = "score = " + score2;
        }
    }
}