 painelController.js

/*function atualizarUltimoAtendimento() {
    // Recupera o último atendido do localStorage
    const ultimo = localStorage.getItem('ultimoAtendido') || 'Aguardando...';
  
    // Atualiza o conteúdo da div com id="ultimoAtendimento"
    document.getElementById('ultimoAtendimento').textContent = ultimo;
  }
  
  // Chama a função assim que a página carregar
  atualizarUltimoAtendimento();
  
  // Atualiza a cada segundo
  setInterval(atualizarUltimoAtendimento, 1000);*/
  
  function atualizarUltimoAtendimento() {
  const ultimoJSON = localStorage.getItem('ultimoAtendido');

  if (!ultimoJSON) {
    document.getElementById('ultimoAtendimento').textContent = 'Aguardando...!';
    return;
  }

  try {
    const ultimo = JSON.parse(ultimoJSON);
    // Aqui você pode personalizar o que exibir, mas se quiser manter "Aguardando..." até um atendimento real:
    document.getElementById('ultimoAtendimento').textContent = `Aguardando....!`;
  } catch (e) {
    document.getElementById('ultimoAtendimento').textContent = 'Aguardando...!';
  }
}

atualizarUltimoAtendimento();
setInterval(atualizarUltimoAtendimento, 1000);
