$(document).ready(function(e){
	$.backstretch("img/cosmos_vxi___the_kingdom_by_redxen-d46617b.jpg");

	setTimeout(userData, 2000);

	function userData (){
		var name = window.prompt("Type your name.", "Your name here!");
		behavior();
		function behavior (){
			if(name == "Your name here!" || name == "" || name == null){
				name = window.prompt("Type your name please, you only take some few seconds.", "Your name here!");
				behavior();
			}else{			
				window.alert('Welcome to mi site! ' + name + ".");
			}			
		}
	}
})