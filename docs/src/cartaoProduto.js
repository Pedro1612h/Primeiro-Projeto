import { catalogo } from "./utulidades.js";


export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="aria-item" id="card-produto-${produtoCatalogo.id}">
        <div class="foto">
          <img
          src="./img/${produtoCatalogo.nomeArquivoImagem}"
          alt=""/>
        </div>
        <p class='nome'>${produtoCatalogo.nome}</p>
        <p class='preco'>$${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class='botao-adicionar'
        >Adicionar</button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  
}

