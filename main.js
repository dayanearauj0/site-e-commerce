/*const nome = "vestido florido 1"; 
const marca = "farm";
const preco = 100;
const nomeArquivoimagem = 'img1.webp';*/

import { inicializarCarrinho } from "./src/menuCarrinho";
/*funcao acima foi pega do menu carrinho para funcionar o botao"x" */

const catalogo =[
    {
        id: 1,
        nome: "vestido florido1",
        marca: "farm",
        preco: "100",
        imagem:"produto-1.webp",
        feminino:true,
    },
    {
        id: 2,
        nome: "vestido florido2",
        marca: "farm",
        preco: "80",
        imagem:"produto-2.webp",
        feminino:true,
    },
    {
        id: 3,
        nome: "vestido florido3",
        marca: "farm",
        preco: "110",
        imagem:"produto-3.webp",
        feminino:true,
    },
    {
        id: 4,
        nome: "vestido florido4",
        marca: "farm",
        preco: "180",
        imagem:"produto-4.webp",
        feminino:true,
    },
    {
        id: 5,
        nome: "vestido florido5",
        marca: "farm",
        preco: "90",
        imagem:"produto-5.webp",
        feminino:true,
    },
    {
        id: 6,
        nome: "biquini florido6",
        marca: "farm",
        preco: "120",
        imagem:"produto-6.webp",
        feminino: true,
    },
    {
        id: 7,
        nome: "vestido florido7",
        marca: "farm",
        preco: "550",
        imagem:"produto-1.webp",
        feminino:true,
    },
];

for(const produtoCatalogo of catalogo) {
    const CartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}"> 
    <img 
    src="./assets/img/${produtoCatalogo.imagem}"
    alt="imagem 1 da pagina" 
    style="height: 300px"
    />
    <P class='marca'>${produtoCatalogo.marca}</P>
    <p>${produtoCatalogo.nome}</p>
    <p>$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`;
/*m-signitica margem-linha 68 -  */
    document.getElementById('container-produto').innerHTML += CartaoProduto
};

inicializarCarrinho();


