function StringContainsLowerCase(stringToTest){
	return (stringToTest !== stringToTest.toLowerCase());
}

function StringContainsUpperCase(stringToTest){
	return (stringToTest !== stringToTest.toUpperCase());
}

function StringContainsNumbers(stringToTest){
	let numberRegex = new RegExp(".*[0-9].*");
return (numberRegex.test(stringToTest));
}

$("form").submit(function(e){

	let passwordValue = $("#pswd").val();
	let passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{10,20}$');

	if (passwordRegex.test(passwordValue)==true) {
		alert('Le mot de passe est conforme');
	}
	else{
			if(passwordValue.length<10){
				alert('Le mot de passe est trop court');
				}
			if(passwordValue.length>20){
				alert('Le mot de passe est trop long');
			}
			if(StringContainsLowerCase(passwordValue)==false){
				alert('Le mot de passe doit contenir au moins une minuscule');
			}

			if(StringContainsUpperCase(passwordValue)==false){
				alert('Le mot de passe doit contenir au moins une majuscule');
			}
			if(StringContainsNumbers(passwordValue)==false){
				alert('Le mot de passe doit contenir au moins un chiffre');
			}
			e.preventDefault();
			return false;
		}
});
