let carrinho = [];

function adicionar(produto) {
  carrinho.push(produto);
  alert(produto + " adicionado ao carrinho!");
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  window.location.href = "login.html";
}
