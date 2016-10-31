var wordListA = new Array();
var wordListA2 = new Array();
var wordListB = new Array();
var wordListB2 = new Array();
var wordListC = new Array();
var wordListC2 = new Array();
var wordListD = new Array();
var wordListD2 = new Array();
var sentenceStructure = new Array();
var sentenceStructure2 = new Array();
var result;
var result2;
var str;
var str2;
var temp;
var temp2;
var dump = new Array();
var dump2 = new Array();
var count = 0;
var count2 = 0;

function moveLeft(btn){ 
	$(btn).removeAttr("onclick");
	$(btn).removeClass('start-btn');
	$(btn).addClass('move-left');
	
	initialize();
	initialize2();
	var panel = document.getElementById("dg-panel");
	setTimeout(function addBox(lol){
	var element = document.createElement("div");
	var newContent = document.createTextNode("风格是"); 
	element.appendChild(newContent);
	panel.appendChild(element);
	$(element).addClass('dialog-appear');
	}, 2000); // Delay 3 seconds
	
	
	setTimeout(function addBox(lol){
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
	
	setTimeout(function addBox(lol){
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
	window.scrollTo(0,document.body.scrollHeight);
	}, 4000); // Delay 3 seconds

	
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
	}else if(i == 1){
		var child = document.getElementById("c0");
		parent.removeChild(child);
		var element = document.getElementById("c1");
		$(element).removeClass('dialog-appear-right');
		$(element).addClass('dialog-move-up2');
		moreDialog();
	}else if (i ==2 ){
		$(parent).hide();
		var panel1 = document.getElementById("panel1");
		$(panel1).hide();
		var resultpanel = document.getElementById("panel3");
		$(resultpanel).show();
		
	}else{
		window.close();
	}

}

function moreDialog(){
	var panel = document.getElementById("dg-panel");
	var element = document.createElement("div");
	var newContent = document.createTextNode("正在分析..."); 
	element.appendChild(newContent);
	panel.appendChild(element);
	$(element).addClass('dialog-appear');
	
	if (str == undefined && str2 == undefined){
		str = "公民社会不断被内卷化的过程，容易导致一个悖论：它看似能帮助我们有效地理解表象，却无力回应情境主义视角提出的挑战。";
	}else if (str == undefined){
		str = str2
	}else {
		str2 = str
	}
	
	setTimeout(function addBox(lol){
	var element = document.createElement("div");	
	var newContent = document.createTextNode(str); 
	element.appendChild(newContent);
	panel.appendChild(element);
	$(element).addClass('dialog-appear');
	window.scrollTo(0,document.body.scrollHeight);
	}, 1500); // Delay 1.5 seconds
	
	setTimeout(function addBox(lol){
	var element = document.createElement("div");
	var newContent = document.createTextNode("生成书签"); 
	element.appendChild(newContent);
	element.id = "c0";
	element.onclick = function() { // Note this is a function
    	choose(2);
  		};
	panel.appendChild(element);
	$(element).addClass('dialog-appear-right');
	$(element).addClass('left-blank');
	window.scrollTo(0,document.body.scrollHeight);
	}, 2500); // Delay 2 seconds
	
	setTimeout(function addBox(lol){
	var element = document.createElement("div");
	var newContent = document.createTextNode("退出"); 
	element.appendChild(newContent);
	element.id = "c0";
	element.onclick = function() { // Note this is a function
    	choose(3);
  		};
	panel.appendChild(element);
	$(element).addClass('dialog-appear-right');
	$(element).addClass('right-dialog');
	window.scrollTo(0,document.body.scrollHeight);
	}, 3500); // Delay 3.5 seconds
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

function initialize2(){
	readTextFile("wordListA");
	readTextFile("wordListB");
	readTextFile("wordListC");
	readTextFile("wordListD");
	readTextFile("sentenceStructure");
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
	str = str.replace(/undefined/g,"虚无主义");
	
	document.getElementById("rng").innerHTML = str;
	return str;
}

function generate2(){
	var aIndex = Math.floor(Math.random() * 31);
	var bIndex = Math.floor(Math.random() * 31);
	var cIndex = Math.floor(Math.random() * 33);
	var dIndex = Math.floor(Math.random() * 32);
	var sIndex = Math.floor(Math.random() * 7); 
	result2 = aIndex + " " + bIndex +" " + cIndex + " " + dIndex + " "+ sIndex ;
	temp2 = sentenceStructure2[sIndex];
	str2 = temp2.toString();
	str2 = str2.replace(/A/g,wordListA2[aIndex]);
	str2 = str2.replace(/B/g,wordListB2[bIndex]);
	str2 = str2.replace(/C/g,wordListC2[cIndex]);
	str2 = str2.replace(/D/g,wordListD2[dIndex]);
	str2 = str2.replace(/undefined/g,"虚无主义");
	
	document.getElementById("rng").innerHTML = str2;
	return str2;
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                dealLines(allText,file);
            }
        }
    }
    rawFile.send(null);
}

function dealLines(t,f){
	var lines = t.split('\n');
        //create select
        //iterate over lines of file and create a option element
        for(var i=0;i<lines.length;i++) {
            //create option
            	switch (f){
	  				case "wordListA":
	  					wordListA2[i] = lines[i];
	  					break;
	  				case "wordListB":
	  					wordListB2[i] = lines[i];
	  					break;
	  				case "wordListC":
	  					wordListC2[i] = lines[i];
	  					break;
	  				case "wordListD":
	  					wordListD2[i] = lines[i];
	  					break;
	  				case "sentenceStructure":
	  					sentenceStructure2[i] = lines[i];
	  					break;
	  				default:
	  					dump2[i] = lines[i];
	  					break;
				}
        }
        
			switch (f){
	  				case "wordListA":
	  					count2++;
	  					break;
	  				case "wordListB":
	  					count2++;
	  					break;
	  				case "wordListC":
	  					count2++;
	  					break;
	  				case "wordListD":
	  					count2++;
	  					break;
	  				case "sentenceStructure":
	  					count2++;
	  					break;
	  				default:
	  					dump2[i] = lines[i];
	  					break;
				}
				if (count2 == 5){generate2();}
}


function read(f){
	
    $.ajax({
    	url: f,
        type: "GET",
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