// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Inicia o jogo ao carregar a página
  iniciarJogo();
});

// Variável para armazenar o PIN correto
let pinCorreto;

// Função para iniciar o jogo
function iniciarJogo() {
  // Gera um PIN aleatório
  pinCorreto = gerarPIN();
  // Exibe o PIN correto na interface
  console.log("PIN Correto:", pinCorreto);
  exibirPINCorreto(pinCorreto);
}

// Função para verificar o PIN inserido pelo usuário
function verificarPIN() {
  // Obtém elementos do DOM
  const pinInput = document.getElementById("pinInput");
  const mensagem = document.getElementById("mensagem");

  // Verifica se o PIN inserido possui pelo menos quatro dígitos
  if (pinInput.value.length < 4) {
      exibirMensagem("Digite pelo menos quatro dígitos.", "red");
      return;
  }

  // Converte o PIN inserido para um número inteiro
  const pinUsuario = parseInt(pinInput.value, 10);

  // Compara o PIN inserido com o PIN correto
  if (pinUsuario === pinCorreto) {
      // Exibe mensagem de sucesso se o PIN for correto
      exibirMensagem("Parabéns! PIN correto.", "green");
  } else {
      // Obtém uma dica e exibe mensagem de erro se o PIN for incorreto
      const dica = obterDica(pinUsuario);
      exibirMensagem(`Errado. ${dica}`, "red");
  }
}

// Função para gerar um PIN aleatório
function gerarPIN() {
  return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}

// Função para exibir o PIN correto na interface
function exibirPINCorreto(pin) {
  const pinCorretoElement = document.getElementById("pinCorreto");
  pinCorretoElement.textContent = `PIN Correto: ${pin}`;
}

// Função para obter uma dica com base no PIN inserido pelo usuário
function obterDica(pinUsuario) {
  const diferenca = Math.abs(pinUsuario - pinCorreto);

  if (pinUsuario > pinCorreto) {
      if (diferenca > 100) {
          return "Próximo valor deve ser muito menor.";
      } else if (diferenca > 10) {
          return "Próximo valor deve ser menor.";
      } else {
          return "Próximo valor deve ser um pouco menor.";
      }
  } else if (pinUsuario < pinCorreto) {
      if (diferenca > 100) {
          return "Próximo valor deve ser muito maior.";
      } else if (diferenca > 10) {
          return "Próximo valor deve ser maior.";
      } else {
          return "Próximo valor deve ser um pouco maior.";
      }
  } else {
      return "Algo deu errado.";
  }
}


// Função para exibir mensagens na interface
function exibirMensagem(texto, cor) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  mensagem.style.color = cor;
}
