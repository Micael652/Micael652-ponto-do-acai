
function adicionar(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(produto + " adicionado ao carrinho!");
}

function irParaCarrinho() {
  const autenticado = localStorage.getItem("usuarioAutenticado");
  if (autenticado) {
    window.location.href = "confirmacao.html";
  } else {
    localStorage.setItem("retornoPosLogin", "confirmacao.html");
    window.location.href = "login.html";
  }
}
