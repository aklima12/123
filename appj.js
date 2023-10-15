function mychick(){
	var pass1=document.getElementById('password');
	var pass2=document.getElementById('C_password');
	if(pass1.type=="password"|| pass2.type=="password"){
		pass1.type="text";
		pass2.type="text";
	}else{
		pass1.type="password";
		pass2.type="password";
	}
}