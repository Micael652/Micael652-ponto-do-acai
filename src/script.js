const itens = [
  { nome: "Açaí Mix 500ml", preco: 18.00, qtd: 1 },
  { nome: "Copo Tradicional 300ml", preco: 12.00, qtd: 2 }
];

function atualizarPedido() {
  const ul = document.getElementById("itens-pedido");
  const totalSpan = document.getElementById("total");
  ul.innerHTML = "";
  let total = 0;

  itens.forEach(item => {
    const subtotal = item.qtd * item.preco;
    total += subtotal;
    const li = document.createElement("li");
    li.textContent = `${item.qtd}x ${item.nome} - R$ ${subtotal.toFixed(2)}`;
    ul.appendChild(li);
  });

  total += 5.00; // taxa entrega padrão
  totalSpan.textContent = "Total: R$ " + total.toFixed(2);
}

function editarEndereco() {
  const novoEndereco = prompt("Digite o novo endereço:");
  if (novoEndereco) {
    document.getElementById("endereco").textContent = novoEndereco;
  }
}

function confirmarPedido() {
  alert("Pedido confirmado! Obrigado.");
}

window.onload = atualizarPedido;