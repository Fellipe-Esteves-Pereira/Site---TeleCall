var tamanho = 0;

function AumentarLetra() {
    if(tamanho < 5){
        for (i = 0; i < 16; i++) {
            // Nav
            if(i < 1 && tamanho < 2){
                let elemento = document.getElementById("nav" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoB = parseFloat(height);
                elemento.style.height = (tamanhoB + 10) + "px";
            }
            // H
            if (i < 11) {
                let elemento = document.getElementById("h" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
            }
            // P
            if (i < 11) {
                let elemento = document.getElementById("p" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
            }
            // botao
            if (i < 16) {
                let elemento = document.getElementById("botao" + i);
                if(i > 5){
                    let width = window.getComputedStyle(elemento, null).getPropertyValue("width");
                    let tamanhoL = parseFloat(width);
                    elemento.style.width = (tamanhoL + 5) + "px";
                }
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoA = parseFloat(height);
                elemento.style.height = (tamanhoA + 5) + "px";
                elemento.style.marginTop = tamanhoA*0.35 + "px";
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
            }
            // A
            if (i < 4 && tamanho < 2) {
                let elemento = document.getElementById("a" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
            }
            //botao Menu
            if(i < 4 && tamanho < 2){
                let elemento = document.getElementById("botao0" + i);
                let width = window.getComputedStyle(elemento, null).getPropertyValue("width");
                let tamanhoL = parseFloat(width);
                elemento.style.width = (tamanhoL + 5) + "px";
                let height3 = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoA = parseFloat(height3);
                elemento.style.height = (tamanhoA + 5) + "px";
                elemento.style.marginTop = tamanhoA*0.35 + "px";
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho + 5) + "px";
            }
        }
        tamanho++;
    }
}

function DiminuirLetra() {
    if(tamanho > 0){
        for (i = 0; i < 16; i++) {
            // Nav
            if(i < 1 && tamanho < 3){
                let elemento = document.getElementById("nav" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 5) + "px";
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoB = parseFloat(height);
                elemento.style.height = (tamanhoB - 10) + "px";
            }
            // H
            if (i < 11) {
                let elemento = document.getElementById("h" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 5) + "px";
            }
            // P
            if (i < 11) {
                let elemento = document.getElementById("p" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 5) + "px";
            }
            // botao
            if (i < 16) {
                let elemento = document.getElementById("botao" + i);
                if(i > 5){
                    let width = window.getComputedStyle(elemento, null).getPropertyValue("width");
                    let tamanhoL = parseFloat(width);
                    elemento.style.width = (tamanhoL - 5) + "px";
                }
                let height = window.getComputedStyle(elemento, null).getPropertyValue("height");
                let tamanhoA = parseFloat(height);
                elemento.style.height = (tamanhoA - 5) + "px";
                elemento.style.marginTop = tamanhoA*0.35 + "px";
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 5) + "px";
            }
            // A
            if (i < 4 && tamanho < 3) {
                let elemento = document.getElementById("a" + i);
                let fontSize = window.getComputedStyle(elemento, null).getPropertyValue("font-size");
                let tamanho = parseFloat(fontSize);
                elemento.style.fontSize = (tamanho - 5) + "px";
            }
            //botao Menu
            if(i < 4 && tamanho < 3){
                let elemento = document.getElementById("botao0" + i);
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
        }
        tamanho--;
    }
}