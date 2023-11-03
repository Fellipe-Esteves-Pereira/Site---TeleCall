// inicio do cod domenu mobile
const menuDiv = document.getElementById('menu-mobile')

function animarMenu(){
  menuDiv.classList.toggle('abrir')
}
// fim do cod do menu mobile


// Inicio do Dark mode
const changeThemeBtn = document.querySelector("#change-theme");

// alternar dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// carregando light e darkmode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Salvando o dark mode no localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

//OCULTA CONTEUDO
function ocultarTodos() {
  var conteudos = document.getElementsByClassName('conteudo');
  for (var i = 0; i < conteudos.length; i++) {
      conteudos[i].style.display = 'none';
  }
}

function mostrarConteudo(id, botao) {
  ocultarTodos();
  var conteudo = document.getElementById(id);
  conteudo.style.display = 'block';
  
  var botoes = document.getElementsByClassName('botao-conteudo');
  for (var i = 0; i < botoes.length; i++) {
      botoes[i].classList.remove('botao-ativo');
  }
  botao.classList.add('botao-ativo');
}