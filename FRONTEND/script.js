$("form").submit(function(e){
	let passwordValue = $("#pswd").val();
	let passwordRegex = new RegExp('[0-9a-zA-Z]{10,20}');  
	if (passwordRegex.test(passwordValue)) {
            alert('Le mot de passe est conforme');
        }
		else{
			alert("Error");
		e.preventDefault();
		return false;
		}
});