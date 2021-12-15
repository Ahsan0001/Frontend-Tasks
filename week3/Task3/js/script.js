function revealMessage() {
	document.getElementById("HiddenMessage").style.display = 'block';
}

function counter(){
	var val = document.getElementById("count").innerHTML;
	if(val > 0){
		var newval = val-1;
	}
	
	else{
		var newval = val;
	}
	document.getElementById("count").innerHTML = newval;
}