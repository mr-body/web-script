let counter = 0;  // Inicializando o contador

// Função para incrementar o contador
function startCounting() {
    setInterval(() => {
        counter++;  // Incrementa o contador
        console.log(`Contagem atual: ${counter}`);  // Exibe a contagem no console
    }, 1000);  // A cada 1000 ms (1 segundo)
}

// Inicia o contador quando a extensão é carregada
startCounting();
