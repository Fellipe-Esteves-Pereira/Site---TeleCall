var tamanho = 0;

function AumentarLetra() {
    if(tamanho < 5){
        for (i = 0; i < 78; i++) {
            // Nav
            if(i < 1 && tamanho < 2){
                let elemento = document.getElementById("nav" + i);
                let elemento2 = document.getElementById("nomeUsuario");
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let fontSize2 = window.getComputedStyle(elemento2, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                let tamanho2 = parseFloat(fontSize2);
                elemento.style.fontSize = (tamanho + 5) + "px";
                elemento2.style.fontSize = (tamanho2 + 5) + "px";
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoB = parseFloat(height);
                elemento.style.height = (tamanhoB + 10) + "px";
            }
            // H
            if (i < 33) {
                let elemento = document.getElementById("h" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
            }
            // P
            if (i < 78) {
                let elemento = document.getElementById("p" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
            }
            // botao
            if (i < 10) {
                let elemento = document.getElementById("botao" + i);
                let width = window.getComputedStyle(elemento, null).getPropertyValue("width");
                let tamanhoL = parseFloat(width);
                elemento.style.width = (tamanhoL + 5) + "px";
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoA = parseFloat(height);
                elemento.style.height = (tamanhoA + 5) + "px";
                elemento.style.marginTop = tamanhoA*0.35 + "px";
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
            }
            //botao Menu e icones
            if(i < 26 && tamanho < 2){
                let elemento = document.getElementById("botao0" + i);
                let width = window.getComputedStyle(elemento, null).getPropertyValue("width");
                let tamanhoL = parseFloat(width);
                elemento.style.width = (tamanhoL + 2) + "px";
                let height3 = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoA = parseFloat(height3);
                elemento.style.height = (tamanhoA + 5) + "px";
                elemento.style.marginTop = tamanhoA*0.35 + "px";
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 2) + "px";
            }
            //div
            if(i < 4){
                let elemento = document.getElementById("div" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoB = parseFloat(height);
                elemento.style.height = (tamanhoB + 200) + "px";
            }
        }
        tamanho++;
    }
}

function DiminuirLetra() {
    if(tamanho > 0){
        for (i = 0; i < 78; i++) {
            // Nav
            if(i < 1 && tamanho < 3){
                let elemento = document.getElementById("nav" + i);
                let elemento2 = document.getElementById("nomeUsuario");
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let fontSize2 = window.getComputedStyle(elemento2, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                let tamanho2 = parseFloat(fontSize2);
                elemento.style.fontSize = (tamanho - 5) + "px";
                elemento2.style.fontSize = (tamanho2 - 5) + "px";
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoB = parseFloat(height);
                elemento.style.height = (tamanhoB - 10) + "px";
            }
            // H
            if (i < 33) {
                let elemento = document.getElementById("h" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 5) + "px";
            }
            // P
            if (i < 78) {
                let elemento = document.getElementById("p" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 5) + "px";
            }
            // botao
            if (i < 10) {
                let elemento = document.getElementById("botao" + i);
                let width = window.getComputedStyle(elemento, null).getPropertyValue("width");
                let tamanhoL = parseFloat(width);
                elemento.style.width = (tamanhoL - 5) + "px";
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoA = parseFloat(height);
                elemento.style.height = (tamanhoA - 5) + "px";
                elemento.style.marginTop = tamanhoA*0.35 + "px";
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 5) + "px";
            }
            //botao Menu e icones
            if(i < 26 && tamanho < 3){
                let elemento = document.getElementById("botao0" + i);
                let width = window.getComputedStyle(elemento, null).getPropertyValue("width");
                let tamanhoL = parseFloat(width);
                elemento.style.width = (tamanhoL - 2) + "px";
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoA = parseFloat(height);
                elemento.style.height = (tamanhoA - 5) + "px";
                elemento.style.marginTop = tamanhoA*0.35 + "px";
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 2) + "px";
            }
            //div
            if(i < 4){
                let elemento = document.getElementById("div" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 5) + "px";
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoB = parseFloat(height);
                elemento.style.height = (tamanhoB - 200) + "px";
            }
        }
        tamanho--;
    }
}