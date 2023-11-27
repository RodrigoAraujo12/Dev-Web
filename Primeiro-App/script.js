var hora = new Date().getHours()
var saudacao
	if(hora <12){
		saudacao="Bom dia"
	}else if(12<=hora & hora < 18){
		saudacao="Boa tarde"
	}else{
		saudacao="Boa noite"
	}
	document.getElementById("mensagem").innerHTML=saudacao