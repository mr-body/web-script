document.getElementById("extractTextButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: getTextFromElement
        }, (results) => {
            // Exibe o resultado na interface do popup
            const resultText = results[0]?.result || "Elemento não encontrado!";
            document.getElementById("result").innerText = resultText;
        });
    });
});

// Função que será executada no contexto da página ativa
function getTextFromElement() {
    const element = document.querySelector('.mp-contains-float');
    if (element) {
        return element.innerText;  // ou element.textContent
    } else {
        return "Elemento não encontrado!";
    }
}

document.getElementById("openFullscreen").addEventListener("click", function () {
    // Captura a aba ativa
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];

        // Captura a URL da aba ativa
        const currentUrl = currentTab.url;

        // Abre a página fullscreen com a URL capturada
        chrome.windows.create({
            url: `fullscreen.html?sourceUrl=${encodeURIComponent(currentUrl)}`, // Passa a URL
            type: "popup",
            width: 1024,        // Defina a largura desejada
            height: 768         // Defina a altura desejada
        });
    });
});
