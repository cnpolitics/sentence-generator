var wordListA = new Array();
var wordListB = new Array();
var wordListC = new Array();
var wordListD = new Array();
var sentenceStructure = new Array();
var result;
var str;
var temp;
var dump = new Array();
var count = 0;

function moveLeft(btn){ 
	$(btn).removeAttr("onclick");
	$(btn).removeClass('start-btn');
	$(btn).addClass('move-left');
	
	initialize();
	var panel = document.getElementById("dg-panel");
	setTimeout(function addBox(str){
	var element = document.createElement("div");
	var newContent = document.createTextNode("风格是"); 
	element.appendChild(newContent);
	panel.appendChild(element);
	$(element).addClass('dialog-appear');
	}, 2000); // Delay 3 seconds
	
	
	setTimeout(function addBox(str){
	var element = document.createElement("div");
	var newContent = document.createTextNode("学术"); 
	element.appendChild(newContent);
	element.id = "c0";
	element.onclick = function() { // Note this is a function
    	choose(0);
  		};
	panel.appendChild(element);
	$(element).addClass('dialog-appear-right');
	$(element).addClass('left-blank');
	}, 4000); // Delay 3 seconds
	
	setTimeout(function addBox(str){
	var element = document.createElement("div");
	var newContent = document.createTextNode("生活"); 
	element.appendChild(newContent);
	element.id = "c1";
	element.onclick = function() { // Note this is a function
    	choose(1);
  		};
	panel.appendChild(element);
	$(element).addClass('dialog-appear-right');
	$(element).addClass('right-dialog');
	}, 6000); // Delay 3 seconds

	
}

function choose(i){
	
	var parent = document.getElementById("dg-panel");

	if (i==0){
		var child = document.getElementById("c1");
		parent.removeChild(child);
		var element = document.getElementById("c0");
		$(element).removeClass('dialog-appear-right');
		$(element).addClass('dialog-move-up');
		moreDialog();
	}else{
		var child = document.getElementById("c0");
		parent.removeChild(child);
		var element = document.getElementById("c1");
		$(element).removeClass('dialog-appear-right');
		$(element).addClass('dialog-move-up2');
		moreDialog();
	}

}

function moreDialog(){
	var panel = document.getElementById("dg-panel");
	var element = document.createElement("div");
	var newContent = document.createTextNode("风格是"); 
	element.appendChild(newContent);
	panel.appendChild(element);
	$(element).addClass('dialog-appear');
	
	
	
	setTimeout(function addBox(str){
	var element = document.createElement("div");	
	var text = generate();
	var newContent = document.createTextNode(text); 
	element.appendChild(newContent);
	panel.appendChild(element);
	$(element).addClass('dialog-appear');
	}, 2000); // Delay 3 seconds
}


function show(){
	initialize();
    $("div#bd > div.panel-body").hide();
    $("div.js_result").eq(0).show();
	$("div.js_result").eq(0).find(".resultscore").eq(0).html($("#totalsc").val());
    gotoTop();
}


function initialize(){
	read("wordListA");
	read("wordListB");
	read("wordListC");
	read("wordListD");
	read("sentenceStructure");
}

function generate(){
	var aIndex = Math.floor(Math.random() * 31);
	var bIndex = Math.floor(Math.random() * 31);
	var cIndex = Math.floor(Math.random() * 33);
	var dIndex = Math.floor(Math.random() * 32);
	var sIndex = Math.floor(Math.random() * 7); 
	result = aIndex + " " + bIndex +" " + cIndex + " " + dIndex + " "+ sIndex ;
	temp = sentenceStructure[sIndex];
	str = temp.toString();
	str = str.replace(/A/g,wordListA[aIndex]);
	str = str.replace(/B/g,wordListB[bIndex]);
	str = str.replace(/C/g,wordListC[cIndex]);
	str = str.replace(/D/g,wordListD[dIndex]);
	ste = str.replace(/undefined/g,"虚无主义");
	document.getElementById("rng").innerHTML = str;
	return str;
}


function read(f){
	
    $.ajax({
    	url: f,
        type: "POST",
        dataType: "text",
        success: function(data){
        //split on new lines
        var lines = data.split('\n');
        //create select
        //iterate over lines of file and create a option element
        for(var i=0;i<lines.length;i++) {
            //create option
            	switch (f){
	  				case "wordListA":
	  					wordListA[i] = lines[i];
	  					break;
	  				case "wordListB":
	  					wordListB[i] = lines[i];
	  					break;
	  				case "wordListC":
	  					wordListC[i] = lines[i];
	  					break;
	  				case "wordListD":
	  					wordListD[i] = lines[i];
	  					break;
	  				case "sentenceStructure":
	  					sentenceStructure[i] = lines[i];
	  					break;
	  				default:
	  					dump[i] = lines[i];
	  					break;
				}
        }
        
			switch (f){
	  				case "wordListA":
	  					count++;
	  					break;
	  				case "wordListB":
	  					count++;
	  					break;
	  				case "wordListC":
	  					count++;
	  					break;
	  				case "wordListD":
	  					count++;
	  					break;
	  				case "sentenceStructure":
	  					count++;
	  					break;
	  				default:
	  					dump[i] = lines[i];
	  					break;
				}
				if (count == 5){generate();}
        }
    });
}

function gotoTop(){
    $("body,html").animate({scrollTop:($("#header").offset().top + $("#header").height())}, 1000);
}