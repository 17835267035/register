let user = document.getElementById('user');
let pass = document.getElementById('pass');
let btn = document.getElementById('btn');
btn.onclick = function(){
	if(user.value.trim() =='lisi' && pass.value =='123'){
		alert('success');
	}
	else{
		location.replace('error.html');
	}
}
