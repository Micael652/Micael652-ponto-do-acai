const cart = [
  { nome: "Açaí Mix 500ml", preco: 18.00, qtd: 1 },
  { nome: "Copo de Açaí Tradicional 300ml", preco: 12.00, qtd: 2 }
];

function atualizarCarrinho() {
  const container = document.getElementById("cart-items");
  const totalDiv = document.getElementById("total");
  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.qtd * item.preco;
    total += subtotal;
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<span>${item.qtd}x ${item.nome}</span><span>R$ ${subtotal.toFixed(2)}</span>`;
    container.appendChild(div);
  });

  totalDiv.innerHTML = `<div class="total">Total: R$ ${total.toFixed(2)}</div>`;
}

function finalizarPedido() {
  alert("Você precisa fazer login ou cadastro antes de finalizar.");
  // Aqui pode redirecionar para tela de login se necessário
}

window.onload = atualizarCarrinho;