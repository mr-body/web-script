// Função para obter a URL da query string
function getUrlFromQueryString() {
    const params = new URLSearchParams(window.location.search);
    return params.get('sourceUrl'); // Pega o valor 'sourceUrl' da query string
}

// Pega a URL e a exibe na página
const sourceUrl = getUrlFromQueryString();
document.getElementById('info').innerText = `A URL capturada é: ${sourceUrl}`;

// Agora você pode usar essa URL para fazer qualquer lógica adicional
