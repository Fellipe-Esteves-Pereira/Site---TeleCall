//Verrificação de login
function Logar() {
    let Usuario = document.getElementById("Usuario").value;
    let Senha = document.getElementById("Senha").value;
    let login = undefined;
    
    for (i = 0; i < localStorage.length; i++) {
        if (JSON.parse(window.localStorage.getItem(localStorage.key(i))).usuario == Usuario && JSON.parse(window.localStorage.getItem(localStorage.key(i))).senha == Senha) {
            login = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
            localStorage.setItem("Logado", JSON.stringify(login));
            window.location.href = "nav/Tela interna.html";
        }
    }
    if (login == undefined) {
        document.getElementById("verificar").style.display = "block";
        setTimeout(function() {
            document.getElementById("verificar").style.display = "none";
        }, 3000);
    }
}

//Início verificação de escrita
function LogarUsuario() {
    const input = document.getElementById("Usuario");
    
    input.addEventListener("keypress", somenteLetras);
    
    function somenteLetras(e) {
        var charCode = (e.which) ? e.which : e.keyCode
        
        if (charCode < 65 || charCode > 90 && charCode < 97 || charCode > 122 && charCode < 193 || charCode > 251){
            e.preventDefault();
        }
    }
    input.addEventListener("paste", SemColar);
        
    function SemColar(e) {
        e.preventDefault();
    }
}
 
function LogarSenha() {
    const input = document.getElementById("Senha");
    
    input.addEventListener("keypress", somenteLetras);
    
    function somenteLetras(e) {
        var charCode = (e.which) ? e.which : e.keyCode
        
        if (charCode < 65 || charCode > 90 && charCode < 97 || charCode > 122 && charCode < 193 || charCode > 251){
            e.preventDefault();
        }
    }
    input.addEventListener("paste", SemColar);
        
    function SemColar(e) {
        e.preventDefault();
    }
}
//Final verificação de escrita

//Inicio ver senha
    var tipo3 = document.getElementById('Senha')

    document.getElementById('pass').addEventListener('click', () => {
    if(tipo3.value) {
        tipo3.type == 'password' ? tipo3.type = 'text' : tipo3.type = 'password';
        document.getElementById('pass').style.display = 'none';
        document.getElementById('text').style.display = 'inline-block';
    }
    })

    document.getElementById('text').addEventListener('click', () => {
    if(tipo3.value) {
        tipo3.type == 'text' ? tipo3.type = 'password' : tipo3.type = 'text';
        document.getElementById('text').style.display = 'none';
        document.getElementById('pass').style.display = 'inline-block';
    }
    })
//Final ver senha


function Deslogar(){
    localStorage.removeItem("Logado");
    window.location = "../index.html";
}

document.addEventListener("DOMContentLoaded", Logado());
  
function Logado(){
    if(localStorage.getItem("Logado") != null){
        window.location = "nav/Tela interna.html"
    }
}