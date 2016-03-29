var wordListA = new Array();
var wordListB = new Array();
var wordListC = new Array();
var wordListD = new Array();
var sentenceStructure = new Array();
var result;
var str;
var dump = new Array();

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
	var aIndex = Math.floor(Math.random() * 33);
	var bIndex = Math.floor(Math.random() * 33);
	var cIndex = Math.floor(Math.random() * 35);
	var dIndex = Math.floor(Math.random() * 34);
	var sIndex = Math.floor(Math.random() * 8); 
	result = sIndex;
	str = sentenceStructure[sIndex].toString();
	str = str.replace("A",wordListA[aIndex]);
	str = str.replace("B",wordListB[bIndex]);
	str = str.replace("C",wordListC[cIndex]);
	str = str.replace("D",wordListD[dIndex]);
	document.getElementById("rng").innerHTML = str;
	result = str;
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
        
        if (f == "sentenceStructure"){
        	generate();
        }
        }
    });
}

function gotoTop(){
    $("body,html").animate({scrollTop:($("#header").offset().top + $("#header").height())}, 1000);
}