
var i;var j;var op;var ggg=0;var seuil = 15;var deffQuizz=0;
var score;
var RPVrais=0;var RPFaux = 0;
var lifes = 3;var deff=1;
var time=100;
var timeStart=0;
function timings() {
	time--;document.getElementById("timing").innerHTML = "Time : "+ time;
	if(time <= 0)
    {


    	document.getElementById("timing").style.visibility = "hidden";
    	document.getElementById("choix1").style.visibility = "hidden";
    	document.getElementById("choix2").style.visibility = "hidden";
    	document.getElementById("choix3").style.visibility = "hidden";
    	document.getElementById("choix4").style.visibility = "hidden";
    	
    	score = 2548 + RPVrais * 250 - RPFaux * 400;
    	if(score <0){
    		score = 2000;
    	}
    	document.getElementById("question").innerHTML	= "Game Over</br>Score = "+score;
    	
    	var type = sessionStorage.getItem("type");
    	if(type === "mentaliste"){
    		localStorage.setItem("The Mentalist", score);
    	}
    	if(type === "basics"){
    		localStorage.setItem("Basics", score);
    	}
    	if(type === "multiplication"){
    		localStorage.setItem("Multiplication", score);
    	}
    	if(type === "division"){
    		localStorage.setItem("Division", score);
    	}
    	if(type === "power"){
    		localStorage.setItem("Power Ranger", score);
    	}
    	if(type === "quadratica"){
    		localStorage.setItem("Quadratica", score);
    		}
    	if(type === "linearity"){
    		localStorage.setItem("Linearty", score);
    	}

    }
}
function loadgame() {

	document.getElementById("timing").innerHTML ="Time : "+ time;
	if(timeStart ===0){
		setInterval(timings, 1000);
		timeStart = 1;
	}
	
	var type = sessionStorage.getItem("type");
	var solution;
	var nb1 = Math.floor(Math.random() * 11* deff);
	var nb2 = Math.floor(Math.random() * 11* deff);
	
	if(type== "mentaliste")
    {
        j = nb1 = Math.floor(Math.random() * 7);
        if (j == 0) { op = "+";solution=nb1+nb2; }
        if (j == 1) { op = "-";solution=nb1-nb2; }
        if (j == 2) { op = "*";	solution=nb1*nb2; }
        if (j == 3) { op = "/"; nb1 = nb2 * nb1;solution = nb1 / nb2;}
        if (j == 4) { op = "power"; }
        if (j == 5) { op = "quadratica"; }
        if (j == 6) { op = "linearity"; }
    }
	
	if(type === "basics"){
		j=Math.floor(Math.random() * 2);
		if (j === 0) { op = "+";solution=nb1+nb2; }
        if (j === 1) { op = "-";solution=nb1-nb2; }
		
	}else if (type === "multiplication") {
		op = "*";
		solution=nb1*nb2;
	}else if (type === "division") {
		op = "/";
		nb1 = nb2 * nb1;
        solution = nb1 / nb2;
	}else if (type === "power")
    {
        op = "power";
    }else if (type === "quadratica")
    {
        op = "quadratica";
    }else if (type === "linearity")
    {
        op = "linearity";
    }
	document.getElementById("question").innerHTML = nb1 + " " + op + " " + nb2;
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
        	document.getElementById("question").innerHTML =  nb1 + " º";
        }
        if (nb2 === 1)
        {
        	document.getElementById("question").innerHTML =  nb1 + " ¹";
        }
        if (nb2 === 2)
        {
        	document.getElementById("question").innerHTML =  nb1 + " ²";
        }
        if (nb2 === 3)
        {
        	document.getElementById("question").innerHTML =  nb1 + " ³";
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
	        	document.getElementById("question").innerHTML = a1 + "x +" + c + " = " + b;
	        }
	        else if (c < 0)
	        {
	        	document.getElementById("question").innerHTML = a1 + "x " + c + " = " + b;
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
		document.getElementById("choix1").innerHTML = solution;
		document.getElementById("choix2").innerHTML = choix1;
		document.getElementById("choix3").innerHTML =  choix2;
		document.getElementById("choix4").innerHTML =  choix3;
    }
    if (i === 1)
    {
    	document.getElementById("choix1").innerHTML =  choix1;
    	document.getElementById("choix2").innerHTML =  solution;
    	document.getElementById("choix3").innerHTML = choix2;
    	document.getElementById("choix4").innerHTML =  choix3;
    }
    if (i === 2)
    {
    	document.getElementById("choix1").innerHTML =  choix1;
    	document.getElementById("choix2").innerHTML = choix2;
    	document.getElementById("choix3").innerHTML =  solution;
    	document.getElementById("choix4").innerHTML =  choix3;
    }
    if (i === 3)
    {
    	document.getElementById("choix1").innerHTML =  choix1;
    	document.getElementById("choix2").innerHTML =  choix2;
    	document.getElementById("choix3").innerHTML =  choix3;
    	document.getElementById("choix4").innerHTML =  solution;
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
        	document.getElementById("question").innerHTML  = a + " x² " + b + " x ";
        }
        else
        {
        	document.getElementById("question").innerHTML = a + " x² + " + b + " x ";
        }
        if (c < 0)
        {
        	document.getElementById("question").innerHTML  = document.getElementById("question").innerHTML+c+" = 0";
        }
        else
        {
        	document.getElementById("question").innerHTML  = document.getElementById("question").innerHTML +" + "+c+" = 0";
        }

        var solutionCh = "x = [" + entier1 + "," + entier2 + "]";
        var choixx1 = "x = [" + (entier1 + 1) + "," + entier2  + "]";
        var choixx2 = "x = [" + entier1+ "," + (entier2 + 2) + "]";
        var choixx3="x = [" + (entier1 + 2) + "," + (entier2 + 1) + "]";

        if (i === 0)
        {
        	document.getElementById("choix1").innerHTML = solutionCh;
        	document.getElementById("choix2").innerHTML = choixx1;
        	document.getElementById("choix3").innerHTML = choixx2;
        	document.getElementById("choix4").innerHTML = choixx3;
        }
        if (i === 1)
        {
        	document.getElementById("choix1").innerHTML = choixx1;
        	document.getElementById("choix2").innerHTML = solutionCh;
        	document.getElementById("choix3").innerHTML = choixx2;
        	document.getElementById("choix4").innerHTML = choixx3;
        }
        if (i === 2)
        {
        	document.getElementById("choix1").innerHTML = choixx1;
        	document.getElementById("choix2").innerHTML = choixx2;
        	document.getElementById("choix3").innerHTML = solutionCh;
        	document.getElementById("choix4").innerHTML = choixx3;
        }
        if (i === 3)
        {
        	document.getElementById("choix1").innerHTML = choixx1;
        	document.getElementById("choix2").innerHTML = choixx2;
        	document.getElementById("choix3").innerHTML = choixx3;
        	document.getElementById("choix4").innerHTML = solutionCh;
        }
    }
}

function checkUnser(indiceBt) {
	if (i === indiceBt)
    {
        
        RPVrais++;
        deffQuizz++;
        if (deffQuizz === 4) { deff++; deffQuizz = 0; }
        
            loadgame();
        


    }
    else
    {


        lifes--;
        RPFaux++;
        deffQuizz++;
        time = time - 10;
        if(time <= 0)
        {


        	document.getElementById("timing").style.visibility = "hidden";
        	document.getElementById("choix1").style.visibility = "hidden";
        	document.getElementById("choix2").style.visibility = "hidden";
        	document.getElementById("choix3").style.visibility = "hidden";
        	document.getElementById("choix4").style.visibility = "hidden";
        	
        	score = 2548 + RPVrais * 250 - RPFaux * 400;
        	document.getElementById("question").innerHTML	= "Game Over</br>Score = "+score;
        	var type = sessionStorage.getItem("type");
        	if(type === "mentaliste"){
        		localStorage.setItem("The Mentalist", score);
        	}
        	if(type === "basics"){
        		localStorage.setItem("Basics", score);
        	}
        	if(type === "multiplication"){
        		localStorage.setItem("Multiplication", score);
        	}
        	if(type === "division"){
        		localStorage.setItem("Division", score);
        	}
        	if(type === "power"){
        		localStorage.setItem("Power Ranger", score);
        	}
        	if(type === "quadratica"){
        		localStorage.setItem("Quadratica", score);
        		}
        	if(type === "linearity"){
        		localStorage.setItem("Linearty", score);
        	}

        }
    }
}