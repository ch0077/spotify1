document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Exibir mensagem de feedback
    const feedbackMessageContainer = document.getElementById('feedbackMessage');
    feedbackMessageContainer.innerHTML = ''; // Limpa mensagens anteriores
    const feedbackMessage = document.createElement('div');
    feedbackMessage.className = 'alert alert-success';
    feedbackMessage.textContent = 'Recebemos sua mensagem, entraremos em contato!';
    feedbackMessageContainer.appendChild(feedbackMessage);
    feedbackMessageContainer.style.display = 'block'; // Torna a mensagem visível

    // Limpar o formulário
    this.reset();

    // Esconder a mensagem após 5 segundos
    setTimeout(() => {
        feedbackMessageContainer.style.display = 'none';
    }, 5000);
});


// Seleciona todas as perguntas (elementos com a classe .faq-question)
document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
        // Acessa a próxima resposta, que é o elemento imediatamente após a pergunta
        let answer = this.nextElementSibling;

        // Alterna a exibição da resposta: mostra se estiver escondida e esconde se estiver visível
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
