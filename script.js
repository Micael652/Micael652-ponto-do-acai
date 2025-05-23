
function adicionar(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(produto + " adicionado ao carrinho!");
}

function finalizarPedido() {
  const logado = localStorage.getItem("usuarioLogado");
  if (logado) {
    alert("Pedido finalizado!");
  } else {
    window.location.href = "login.html";
  }
}
