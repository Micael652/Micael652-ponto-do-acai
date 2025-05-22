
function adicionarCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(produto + " adicionado ao carrinho!");
}

function finalizarPedido() {
  const usuarioLogado = localStorage.getItem('usuario');
  if (usuarioLogado) {
    window.location.href = 'confirmar.html';
  } else {
    window.location.href = 'login.html';
  }
}
