/* js/carrinho.js ---------------------------------------------
   Monta lista, controla + / − / remover e finaliza compra. */

document.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById("carrinho");
    const totalEl = document.getElementById("totalCarrinho");
    const finalizarBtn = document.getElementById("finalizarBtn");

    let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");

    function render() {
        ul.innerHTML = "";
        let soma = 0;

        carrinho.forEach((item, i) => {
            const li = document.createElement("li");
            li.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}">
        <span class="item-info">${item.nome}</span>
        <button class="qty-btn menos" data-i="${i}">−</button>
        <span>${item.qtd}</span>
        <button class="qty-btn mais"  data-i="${i}">+</button>
        <span style="width:90px;text-align:right;">R$ ${(item.preco * item.qtd).toFixed(2)}</span>
        <button class="qty-btn remover" data-i="${i}">x</button>`;
            ul.appendChild(li);
            soma += item.preco * item.qtd;
        });

        totalEl.textContent = `Total: R$ ${soma.toFixed(2)}`;
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    /* Eventos */
    ul.addEventListener("click", e => {
        const i = e.target.dataset.i;
        if (e.target.classList.contains("mais"))    carrinho[i].qtd++;
        if (e.target.classList.contains("menos"))   carrinho[i].qtd > 1 ? carrinho[i].qtd-- : carrinho.splice(i,1);
        if (e.target.classList.contains("remover")) carrinho.splice(i,1);
        render();
    });

    finalizarBtn.addEventListener("click", () => {
        if (!carrinho.length) {
            alert("🚫 Seu carrinho está vazio!");
            return;
        }
        alert("🎉 Compra finalizada! Obrigado.");
        carrinho = [];
        render();
    });

    render();
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
