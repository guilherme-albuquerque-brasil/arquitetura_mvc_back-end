class ProdutoView {
    constructor() {
    this.listaElemento = document.getElementById("lista-produtos");
    }
    exibirProdutos(produtos) {
    this.listaElemento.innerHTML = "";
    produtos.forEach((produto) => {
    const item = document.createElement("li");
    item.textContent =
    produto.nome + " - R$ " + produto.preco.toFixed(2);
    this.listaElemento.appendChild(item);
    });
    }
    }