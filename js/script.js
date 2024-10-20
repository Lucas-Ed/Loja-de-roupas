// Seleciona todos os botões "Adicionar ao Carrinho"
const botoesAdicionar = document.querySelectorAll('.button1');

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(event) {
  // Obtém o produto clicado
  const produto = event.target.closest('.sellcard');

  // Extrai as informações do produto (você pode personalizar isso)
  const descricao = produto.querySelector('.descricao').textContent;
  const valor = produto.querySelector('.valor').textContent;

  // Cria um objeto para representar o produto no carrinho
  const itemCarrinho = {
    descricao,
    valor
  };

  // Recupera o carrinho do localStorage ou cria um novo
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Adiciona o item ao carrinho
  carrinho.push(itemCarrinho);

  // Armazena o carrinho atualizado no localStorage do navegador do usuário.
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Exibe uma mensagem mais informativa
  alert(`Produto "${descricao}" adicionado ao carrinho com sucesso!`);
}

// Adiciona um ouvinte de eventos para todos os botões
botoesAdicionar.forEach(botao => {
  botao.addEventListener('click', adicionarAoCarrinho);
});