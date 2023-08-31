function abrirCarrinho() {
    document.getElementById("carrinho").classlist.add("right-[0px]");
    document.getElementById("carrinho").classlist.remove("right-[-360px]");

}

function fecharCarrinho() { 
    document.getElementById("carrinho").classlist.remove("right-[0px]");
    document.getElementById("carrinho").classlist.add("right-[-360px]");
    
}
/*essa funcao acima diz que faz o carrinho aparacer no 0px e desaparecer -360*/

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}
/*essa funcao ela seja encarregada de dar acao de fechar e abrir o carrinho*/




/*deve centralizar esse cod no main.js p ele funcionar*/