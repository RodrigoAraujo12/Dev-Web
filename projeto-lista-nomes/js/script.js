let nomes=[
	"bia",
	"rodrigo",
	"paulo",
	"paula",
	"glaucio",

]
function carregarNomes(){
	let intensLista=''
	for(indice in nomes){
		let nome = nomes[indice]
		intensLista += `<li class="list-group-item">
			${nome}
		</li>`
	}
	document.getElementById('lista').innerHTML=intensLista
}
function pesquisarNome(){
	let nomePesquisa= document.getElementById('campo-nome').value
	let intensLista=''
	for(index in nomes){
		nome=nomes[index]
		if(nomePesquisa == nome){
			intensLista += `<li class="list-group-item">
			${nome}
		</li>`
		}
	document.getElementById('lista').innerHTML=intensLista
	}
}
