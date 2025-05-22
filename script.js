
function adicionarAoCarrinho(produto) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(produto + " adicionado ao carrinho!");
}

function verCarrinho() {
  const autenticado = localStorage.getItem('usuarioAutenticado');
  if (!autenticado) {
    localStorage.setItem('retornoPosLogin', 'carrinho');
    window.location.href = 'login.html';
  } else {
    window.location.href = 'carrinho.html';
  }
}
