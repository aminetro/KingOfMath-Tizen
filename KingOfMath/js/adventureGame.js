
var i;
var score;
var RPVrais=0;var RPFaux = 0;
var lifes = 3;
function loadgame() {
	
	
	var operation="";
	var deff = sessionStorage.getItem("defficulite");
	var op = sessionStorage.getItem("operation");
	var solution;
	var nb1 = Math.floor(Math.random() * 11* deff);
	var nb2 = Math.floor(Math.random() * 11* deff);
	
	if(op === '+'){
		solution=nb1+nb2;operation="addition";
	}else if (op === '-') {
		solution=nb1-nb2;operation="soustraction";
	}else if (op === '*') {
		solution=nb1*nb2;operation="multiplication";
	}else if (op === '/') {
		nb1 = nb2 * nb1;
        solution = nb1 / nb2;
        operation="division";
	}
	document.getElementById("question").innerHTML = nb1 + " " + op + " " + nb2;
	var choix1 = Math.floor(Math.random() * 15)+1 + solution;
    var choix2 = 0;
    var choix3 = 0;
    while (choix1 === choix2 || choix2 === choix3 || choix1 === choix3 || choix2 === choix3 || choix1 === solution || choix2 === solution || choix3 === solution)
    {
        choix2 = Math.floor(Math.random() * 15)+1 + solution; choix3= Math.floor(Math.random() * 15)+1 + solution;
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
}

function checkUnser(indiceBt) {
	if (i === indiceBt)
    {
        
        RPVrais++;
        if (RPVrais === 10)
        {
        	
        	var operation="";
        	var deff = sessionStorage.getItem("defficulite");
        	var op = sessionStorage.getItem("operation");
        	if(op === '+'){
        		operation="addition";
        	}else if (op === '-') {
        		operation="soustraction";
        	}else if (op === '*') {
        		operation="multiplication";
        	}else if (op === '/') {
                operation="division";
        	}
        	
        	document.getElementById("choix1").style.visibility = "hidden";
        	document.getElementById("choix2").style.visibility = "hidden";
        	document.getElementById("choix3").style.visibility = "hidden";
        	document.getElementById("choix4").style.visibility = "hidden";

            score = 2548 + RPVrais * 250 - RPFaux * 400;
            document.getElementById("question").innerHTML = "Chapter Successful </br> Score = " + score;
            
            localStorage.setItem(operation + deff, score);
        }
        else
        {
            loadgame();
        }


    }
    else
    {


        lifes--;
        RPFaux++;
        if (lifes === 2) { document.getElementById("life1").setAttribute("src", "life1.png"); }
        if (lifes === 1) { document.getElementById("life2").setAttribute("src", "life1.png"); }
        if (lifes === 0)
        {
        	document.getElementById("life3").setAttribute("src", "life1.png");


        	document.getElementById("choix1").style.visibility = "hidden";
        	document.getElementById("choix2").style.visibility = "hidden";
        	document.getElementById("choix3").style.visibility = "hidden";
        	document.getElementById("choix4").style.visibility = "hidden";
        	

        	document.getElementById("question").innerHTML	= "Chapter Failed";
            

        }
    }
}