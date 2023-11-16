let carrinho3 = document.getElementById("teste");
let total = 0
let vazio = document.getElementById("vazio");
let adicionado = document.getElementsByClassName("adicionado")[0];


function adddb(id, nome, preco, foto){
    localStorage.setItem()
}


function limparCarrinho() {
    carrinho3.innerHTML = "";
    vazio.style.display = "block";
    carrinho3.innerHTML += "<h2>My ShopCart</h2>";
    carrinho3.innerHTML += "<p id='vazio'>Carrinho Vazio</p>";
    carrinho3.innerHTML += " <button id='limpar' onclick='limparCarrinho()'>Limpar Carrinho</button>";
    total = 0;
}

function adicionarItem(id, nome, preco, foto) {
    total += preco
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

        setTimeout(function() {
             adicionado.style.animation = "";
          }, 3000);
          

    carrinho3.appendChild(tenis);
}