class ProdutoController {
    constructor() {
    this.model = new ProdutoModel();
    this.view = new ProdutoView();
    document.getElementById("form-produto")
    .addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("input-nome").value;
    const preco = parseFloat(
    document.getElementById("input-preco").value
    );
    this.model.adicionarProduto(nome, preco);
    this.atualizarTela();
    });
    this.atualizarTela();
    }
    atualizarTela() {
    const produtos = this.model.listarProdutos();
    this.view.exibirProdutos(produtos);
    }
    }
    new ProdutoController();