class ProdutoModel {
    constructor() {
    this.produtos = [
    { id: 1, nome: "Notebook", preco: 3500.00 },
    { id: 2, nome: "Mouse", preco: 50.00 },
    { id: 3, nome: "Teclado", preco: 120.00 }
    ];
    }
    listarProdutos() {
    return this.produtos;
    }
    adicionarProduto(nome, preco) {
    const novoId = this.produtos.length + 1;
    this.produtos.push({ id: novoId, nome: nome, preco: preco });
    }
    }