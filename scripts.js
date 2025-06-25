/* ---------- Modal Endereço ---------- */
const modal   = document.querySelector(".ad");
const mascara = document.querySelector(".mascara-modal");


/* ---------- Menu Responsivo ---------- */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
/* js/loja.js --------------------------------------------------
   Captura cliques em "Adicionar ao Carrinho" e salva no localStorage. */

document.addEventListener("DOMContentLoaded", () => {
    window.adicionarAoCarrinho = function (nome, preco, imagem) {
        // 1. Pega carrinho salvo (ou cria array vazio)
        const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");

        // 2. Procura produto
        const idx = carrinho.findIndex(item => item.nome === nome);
        if (idx > -1) {
            carrinho[idx].qtd += 1;
        } else {
            carrinho.push({ nome, preco, imagem, qtd: 1 });
        }

        // 3. Salva de volta
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        // 4. Aviso rápido
        alert(`✅ “${nome}” adicionado!`);

        // 5. Vai para a página do carrinho
        window.location.href = "carrinho.html";
    };
});

function mostrarModal() {
    document.querySelector('.ad').style.display = 'block';
    document.querySelector('.mascara-modal').classList.add('ativa');
}

function esconderModal() {
    document.querySelector('.ad').style.display = 'none';
    document.querySelector('.mascara-modal').classList.remove('ativa');
}


