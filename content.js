// Função para pegar o texto de um elemento específico
function getTextFromElement() {
    const element = document.querySelector('.mp-contains-float');
    if (element) {
        return element.innerText;  // ou element.textContent
    } else {
        return "Elemento não encontrado!";
    }
}

// Enviar o texto capturado para o console
console.log(getTextFromElement());
