let carrinho3 = document.getElementById("teste");
let vazio = document.getElementById("vazio");
let adicionado = document.getElementsByClassName("adicionado")[0];
let total;
if(!localStorage.getItem("total")){
    total = Number();
    localStorage.setItem("total", total)

}
else{
    total = Number(localStorage.getItem("total"))
}

document.addEventListener("DOMContentLoaded", function () {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
        carrinho3.innerHTML = carrinhoSalvo;
        atualizarTotal();
    }
});

function limparCarrinho() {
    carrinho3.innerHTML = "";
    vazio.style.display = "block";
    carrinho3.innerHTML += "<h2>My ShopCart</h2>";
    carrinho3.innerHTML += " <button id='limpar' onclick='limparCarrinho()'>Limpar Carrinho</button>";
    total = Number(0);
    localStorage.setItem("total", Number(total));
    localStorage.removeItem("carrinho");
}

function adicionarItem(id, nome, preco, foto) {
    total += preco
    localStorage.setItem("total", Number(total))
    adicionado.style.animation = "opacidade 4s forwards";
    vazio.style.display = "none";
    let tenis = document.createElement("div");
    tenis.setAttribute("class", "tenis");
    tenis.setAttribute("id", id);
    tenis.innerHTML = `<br>
        <div class="foto">
            <img src="${foto}" alt="${nome}" style="border-radius:15px"  width="30%">
        </div>
        <div class="nome">${nome}</div>
        <div class="preco">R$ ${preco}</div>
       <br>
        <div class="total">
        <strong>
        Total R$ ${total}
        </strong>
        </div>
        
        <br>`;

    carrinho3.appendChild(tenis);

    // Atualiza o localStorage com os itens do carrinho
    localStorage.setItem("carrinho", carrinho3.innerHTML);
}

// Função para atualizar o total no carrinho
function atualizarTotal() {
    const totalElement = carrinho3.querySelector(".total");
    if (totalElement) {
        totalElement.innerHTML = `<strong>Total R$ ${total}</strong>`;
    }
}
