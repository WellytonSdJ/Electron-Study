document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.getElementById("buttons-container");

  // Função para carregar a lista de arquivos da pasta "comands"
  async function loadFileNames() {
      try {
          const response = await fetch("/api/list-files"); // Substitua pelo endpoint real
          if (!response.ok) {
              throw new Error("Erro ao buscar a lista de arquivos.");
          }

          const fileNames = await response.json();
          createButtons(fileNames);
      } catch (error) {
          console.error("Erro ao buscar a lista de arquivos:", error);
      }
  }

  // Função para criar os botões com base na lista de arquivos
  function createButtons(fileNames) {
      fileNames.forEach(function (fileName) {
          const buttonDiv = document.createElement("div");
          buttonDiv.className = "btn";

          const buttonLink = document.createElement("a");
          buttonLink.href = "#";
          buttonLink.textContent = `Read more ${fileName}`;

          // Adicionar evento de clique para executar o arquivo
          buttonLink.addEventListener("click", function () {
              // Usar uma função para executar o arquivo
              executeCommand(fileName);
          });

          buttonDiv.appendChild(buttonLink);
          buttonsContainer.appendChild(buttonDiv);
      });
  }

  // Função para executar o arquivo
  function executeCommand(fileName) {
      // Você pode adicionar aqui a lógica para executar o arquivo .bat
      // Por exemplo, usando node.js child_process para executar o arquivo
      // Certifique-se de ter a segurança necessária, pois executar arquivos .bat pode ser arriscado.
      console.log(`Executando arquivo: ${fileName}`);
  }

  // Carregar a lista de arquivos quando a página for carregada
  loadFileNames();
});
