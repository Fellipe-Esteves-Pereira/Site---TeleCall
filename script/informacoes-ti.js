//Nome do usuario no menu
document.getElementById("nomeUsuario").innerHTML = JSON.parse(localStorage.getItem("Logado")).nome;
document.getElementById("nomeUsuario").style.fontSize = "21px";
document.getElementById("nomeusuario").innerHTML = JSON.parse(localStorage.getItem("Logado")).nome;

//Informações do usuario desktop
document.getElementById("nome").value = JSON.parse(localStorage.getItem("Logado")).nome;
document.getElementById("nascimento").value = JSON.parse(localStorage.getItem("Logado")).nascimento;
document.getElementById("mae").value = JSON.parse(localStorage.getItem("Logado")).mae;
document.getElementById("cpf").value = JSON.parse(localStorage.getItem("Logado")).cpf;
document.getElementById("celular").value = JSON.parse(localStorage.getItem("Logado")).celular;
document.getElementById("telefone").value = JSON.parse(localStorage.getItem("Logado")).telefone;
document.getElementById("estado").value = JSON.parse(localStorage.getItem("Logado")).estado;
document.getElementById("cep").value = JSON.parse(localStorage.getItem("Logado")).cep;
document.getElementById("cidade").value = JSON.parse(localStorage.getItem("Logado")).cidade;
document.getElementById("rua").value = JSON.parse(localStorage.getItem("Logado")).rua;
document.getElementById("bairro").value = JSON.parse(localStorage.getItem("Logado")).bairro;
document.getElementById("numero").value = JSON.parse(localStorage.getItem("Logado")).numero;

//Informações do usuario mobile
document.getElementById("nomeM").value = JSON.parse(localStorage.getItem("Logado")).nome;
document.getElementById("celularM").value = JSON.parse(localStorage.getItem("Logado")).celular;
document.getElementById("telefoneM").value = JSON.parse(localStorage.getItem("Logado")).telefone;
document.getElementById("estadoM").value = JSON.parse(localStorage.getItem("Logado")).estado;
document.getElementById("cepM").value = JSON.parse(localStorage.getItem("Logado")).cep;
document.getElementById("cidadeM").value = JSON.parse(localStorage.getItem("Logado")).cidade;
document.getElementById("ruaM").value = JSON.parse(localStorage.getItem("Logado")).rua;
document.getElementById("bairroM").value = JSON.parse(localStorage.getItem("Logado")).bairro;
document.getElementById("numeroM").value = JSON.parse(localStorage.getItem("Logado")).numero;