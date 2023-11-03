let Letra = ['nome', 'mae', 'rua', 'bairro', 'cidade', 'usuario', 'senha', 'confirma_senha'];
let id = localStorage.getItem("id");
if(id == null){
    localStorage.setItem("id", JSON.stringify(0));
    id = JSON.parse(localStorage.getItem("id"));
}

//alerta de verificação
function toast(frase) {
  let toast = document.getElementById("toast");
  toast.textContent = frase.toString();
  toast.style.background = "red";
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(function() {
    toast.classList.remove("show");
    toast.classList.add("hidden");
    toast.textContent = "";
  }, 3000);
}

function toast2(frase) {
    let toast = document.getElementById("toast");
    toast.textContent = frase.toString();
    toast.style.background = "green";
    toast.classList.remove("hidden");
    toast.classList.add("show");
  
    setTimeout(function() {
      toast.classList.remove("show");
      toast.classList.add("hidden");
      toast.textContent = "";
    }, 3000);
  }

//Início de armazenamento de cadastro
function handleSubmit(event) {
  event.preventDefault();

  var nome = document.getElementById('nome').value;
  var nascimento = document.getElementById('nascimento').value;
  var mae = document.getElementById('mae').value;
  var sexo = document.getElementById('sexo').value;
  var cpf = document.getElementById('cpf').value;
  var estado = document.getElementById('estado').value;
  var telefone = document.getElementById('telefone').value;
  var celular = document.getElementById('celular').value;
  var cep = document.getElementById('cep').value;
  var rua = document.getElementById('rua').value;
  var bairro = document.getElementById('bairro').value;
  var cidade = document.getElementById('cidade').value;
  var numero = document.getElementById('numero').value;
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;
  var confirma_senha = document.getElementById('confirma_senha').value;

  class Login {
    constructor(nome, nascimento, mae, sexo, cpf, estado, telefone, celular, cep, rua, bairro, cidade, numero, usuario, senha) {
      this.nome = nome,
        this.nascimento = nascimento,
        this.mae = mae,
        this.sexo = sexo,
        this.cpf = cpf,
        this.estado = estado,
        this.telefone = telefone,
        this.celular = celular,
        this.cep = cep,
        this.rua = rua,
        this.bairro = bairro,
        this.cidade = cidade,
        this.numero = numero,
        this.usuario = usuario,
        this.senha = senha
    }
  }

  if (senha === confirma_senha && (nome != "" && nascimento != "" && mae != "" && sexo != "" && cpf != "" && estado != "" && telefone != "" && celular != "" && cep != "" && rua != "" && bairro != "" && cidade != "" && numero != "" && usuario != "" && senha != "")) {
    localStorage.setItem("id", JSON.stringify(parseInt(id)+1))
    localStorage.setItem(id, JSON.stringify(new Login(nome, nascimento, mae, sexo, cpf, estado, telefone, celular, cep, rua, bairro, cidade, numero, usuario, senha)));
    toast2('Cadastro realizado com sucesso!');
    window.location.href = "#home"
    var nome = document.getElementById('nome').value = "";
    var nascimento = document.getElementById('nascimento').value = "";
    var mae = document.getElementById('mae').value = "";
    var sexo = document.getElementById('sexo').value = "";
    var cpf = document.getElementById('cpf').value = "";
    var estado = document.getElementById('estado').value = "";
    var telefone = document.getElementById('telefone').value = "";
    var celular = document.getElementById('celular').value = "";
    var cep = document.getElementById('cep').value = "";
    var rua = document.getElementById('rua').value = "";
    var bairro = document.getElementById('bairro').value = "";
    var cidade = document.getElementById('cidade').value = "";
    var numero = document.getElementById('numero').value = "";
    var usuario = document.getElementById('usuario').value = "";
    var senha = document.getElementById('senha').value = "";
    var confirma_senha = document.getElementById('confirma_senha').value = "";
    ocultarTodos();

  } else if (senha !== confirma_senha) {
    toast("As senhas não coincidem");
  } else {
    toast("Algum campo não está preenchido");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formulario').addEventListener('submit', handleSubmit);
});
//Final de armazenamento de cadastro

//Verificação de escrita de letra
function CadastrarLetra() {
  for (i = 0; i < Letra.length; i++) {
    const input = document.getElementById(Letra[i]);

    input.addEventListener("keypress", somenteLetras);

    function somenteLetras(e) {
      var charCode = (e.which) ? e.which : e.keyCode

      if (charCode != 32 && charCode < 65 || charCode > 90 && charCode < 97 || charCode > 122 && charCode < 193 || charCode > 251) {
        e.preventDefault();
      }
    }
    input.addEventListener("paste", SemColar);

    function SemColar(e) {
      e.preventDefault();
    }
  }
}

//Campo nome
function VerificarNome() {
  let input = document.getElementById("nome").value
  if (input.length < 15 || input.length > 60) {
    toast("O campo de nome deve ter entre 15 a 60 caracteres");
    document.getElementById("nome").value = "";
  }
}

//Início campo data
let Data = new Date;
let dia = Data.getDate() > 10 ? Data.getDate() : "0" + Data.getDate();
let mes = parseInt(Data.getMonth()) + 1 >= 10 ? parseInt(Data.getMonth()) + 1 : "0" + (parseInt(Data.getMonth()) + 1).toString();
let ano = Data.getFullYear();

let dataMaioridade = ((ano - 18) + "-" + mes + "-" + dia);
let dataLimite = ((ano - 121) + "-" + mes + "-" + dia);

function CadastrarData() {
  let data = document.getElementById("nascimento");

  if (data.value >= dataMaioridade) {
    toast("Cadastro somente para maiores de 18 anos");
    document.getElementById("nascimento").value = "";
  } else if (data.value < dataLimite) {
    toast("Data inválida");
    document.getElementById("nascimento").value = "";
  }
}

function VerificarNomeMae() {
  let input = document.getElementById("mae").value
  if (input.length < 15 || input.length > 60) {
    toast("O campo de nome deve ter entre 15 a 60 caracteres");
    document.getElementById("mae").value = "";
  }
}
//Final campo data

//Início campo CPF
function CadastrarCPF() {
  const input = document.getElementById("cpf");

  input.addEventListener("keypress", somenteNumeros);

  function somenteNumeros(e) {
    var charCode = (e.which) ? e.which : e.keyCode

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }

    let inputLength = input.value.length

    if (inputLength === 3 || inputLength === 7) {
      input.value += '.'
    } else if (inputLength === 11) {
      input.value += '-'
    }
  }
  input.addEventListener("paste", SemColar);

  function SemColar(e) {
    e.preventDefault();
  }
}

function VerificarCPF() {
  let cpf = document.getElementById("cpf").value.replace(".", "").replace(".", "").replace("-", "").toString();
  let auxiliar = 0;
  let verificar = false;

  for (i = 0; i < 11; i++) {
    auxiliar += parseInt(cpf.charAt(i));
  }

  if ((auxiliar == 33 || auxiliar == 44 || auxiliar == 55 || auxiliar == 66) && (cpf != 33333333333 && cpf != 44444444444 && cpf != 55555555555 && cpf != 66666666666)) {
    verificar = true;
  }

  if (verificar == false || document.getElementById("cpf").value.length != 14) {
    toast("CPF Inválido");
    document.getElementById("cpf").value = "";
  }
}
//Final campo CPF

//Início campo CEP
function CadastrarCep() {
  const input = document.getElementById("cep");

  input.addEventListener("keypress", somenteNumeros);

  function somenteNumeros(e) {
    var charCode = (e.which) ? e.which : e.keyCode

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }

    let inputLength = input.value.length

    if (inputLength === 5) {
      input.value += '-'
    }
  }
  input.addEventListener("paste", SemColar);

  function SemColar(e) {
    e.preventDefault();
  }
}

function ProcuraCEP() {
  var cep = document.getElementById("cep").value.replace("-", "");
  if (cep !== '') {
    let url = 'https://brasilapi.com.br/api/cep/v1/' + cep;
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();

    req.onload = function() {
      if (req.status === 200) {
        let endereco = JSON.parse(req.response)
        document.getElementById('rua').value = endereco.street
        document.getElementById('bairro').value = endereco.neighborhood
        document.getElementById('cidade').value = endereco.city
        document.getElementById('estado').value = endereco.state
      }
      else if (req.status === 404) {
        toast("CEP INVÁLIDO");
        document.getElementById("cep").value = "";
      }
    }
  }
}

window.onload = function() {
  let textcep = document.getElementById('cep');
  textcep.addEventListener("blur", ProcuraCEP);
}
//Final campo CEP

//Início campo numero da casa
function CadastrarNumero() {
  const input = document.getElementById("numero");

  input.addEventListener("keypress", somenteNumeros);

  function somenteNumeros(e) {
    var charCode = (e.which) ? e.which : e.keyCode

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
  }
  input.addEventListener("paste", SemColar);

  function SemColar(e) {
    e.preventDefault();
  }
}
//Final campo numero da casa

//Início campo telefone
function CadastrarTelefone() {
  const input = document.getElementById("telefone");
  input.value += "+55 (";

  input.addEventListener("keypress", somenteNumeros);

  function somenteNumeros(e) {
    var charCode = (e.which) ? e.which : e.keyCode

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }

    let inputLength = input.value.length

    if (inputLength === 7) {
      input.value += ') '
    } else if (inputLength === 13) {
      input.value += '-'
    }
  }
  input.addEventListener("paste", SemColar);

  function SemColar(e) {
    e.preventDefault();
  }
}

function VerificarTelefone() {
  let telefone = document.getElementById("telefone").value.toString();
  if (telefone.charAt(9) < 2 || telefone.charAt(9) > 5 || telefone.length != 18) {
    toast("O número do telefone não é válido");
    document.getElementById("telefone").value = "";
  }
}
//Final campo telefone

//Início campo celular
function CadastrarCelular() {
  const input = document.getElementById("celular");
  input.value += "+55 (";

  input.addEventListener("keypress", somenteNumeros);

  function somenteNumeros(e) {
    var charCode = (e.which) ? e.which : e.keyCode

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }

    let inputLength = input.value.length
    if (inputLength === 7) {
      input.value += ') '
    } else if (inputLength === 14) {
      input.value += '-'
    }
  }
  input.addEventListener("paste", SemColar);

  function SemColar(e) {
    e.preventDefault();
  }
}

function VerificarCelular() {
  let celular = document.getElementById("celular").value.toString();
  if (celular.charAt(9) != 9 || celular.length != 19) {
    toast("O número do celular não é válido");
    document.getElementById("celular").value = "";
  }
}
//Final campo celular

//Início campo usuario e senha
function VerificarUsuario() {
  let input = document.getElementById("usuario").value
  if (input.length < 6) {
    document.getElementById("usuario").value = "";
    toast("O campo de usuário deve ter exatos 6 caracteres");
  }
}

function VerificarSenha() {
  let senha = document.getElementById("senha").value;
  let confirma_senha = document.getElementById("confirma_senha").value;

  if (confirma_senha.length < 8 || senha.length < 8) {
    toast("A senha deve ter exatos 8 caracteres");
    document.getElementById("senha").value = "";
    document.getElementById("confirma_senha").value = "";
  }
}

//Início Script botão mostrar senha
var tipo = document.getElementById('senha')
var tipo2 = document.getElementById('confirma_senha')

document.getElementById('pass2').addEventListener('click', () => {
  if (tipo.value && tipo2.value) {
    tipo.type == 'password' ? tipo.type = 'text' : tipo.type = 'password';
    tipo2.type == 'password' ? tipo2.type = 'text' : tipo2.type = 'password';
    document.getElementById('pass2').style.display = 'none';
    document.getElementById('text2').style.display = 'inline-block';
  }
})

document.getElementById('text2').addEventListener('click', () => {
  if (tipo.value && tipo2.value) {
    tipo.type == 'text' ? tipo.type = 'password' : tipo.type = 'text';
    tipo2.type == 'text' ? tipo2.type = 'password' : tipo2.type = 'text';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('pass2').style.display = 'inline-block';
  }
})
//Final Script botão mostrar senha

//Final campo usuario e senha