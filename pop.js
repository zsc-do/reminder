

document.getElementById('sure').onclick = function(){


    
    let content = document.forms["form"]["content"].value;

    let timespan = document.forms["form"]["timespan"].value;

    let loop = document.forms["form"]["loop"].value;



    console.log(loop);

    var mill = timespan * 60 * 1000;

    console.log(mill);


    //content_scripts——>background 
	chrome.runtime.sendMessage(
		{ 
			content: content,
            mill: mill,
            loop: loop
		}
	);
}



document.getElementById('clear').onclick = function(){
     //content_scripts——>background 
	chrome.runtime.sendMessage(
		{ 
            clear: "yes"
		}
	);

}
