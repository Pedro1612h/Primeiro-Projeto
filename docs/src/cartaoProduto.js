import { catalogo } from "./utulidades.js";


export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="aria-item" id="card-produto-${produtoCatalogo.id} ${produtoCatalogo.lancamento ? 'lancamento' : 'pronto'}">
        <div class="foto">
          <img
          src="./imagens/produtos/${produtoCatalogo.nomeArquivoImagem}"
          alt=""/>
        </div>
        <p class='nome'>${produtoCatalogo.nome}</p>
        <p class='local'>${produtoCatalogo.local}</p>
        <p class='preco'>${produtoCatalogo.preco}</p>
        <a href="./paginasDosProdutos/${produtoCatalogo.link}"><button id='adicionar-${produtoCatalogo.id}' class='botao-adicionar'
        >Visualizar</button></a>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  
}

