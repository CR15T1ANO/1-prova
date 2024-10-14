// Função para adicionar item ao carrinho
function adicionarAoCarrinho(produto, complementos, fruta, preco) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let novoItem = {
        product: produto,
        complementos: complementos,
        fruta: fruta,
        price: preco,
        quantity: 1
    };

    cart.push(novoItem);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Associando a função ao botão "Comprar"
document.querySelector('.btn-comprar').addEventListener('click', function() {
    let produto = 'acai 100%'; // Exemplo de produto, você pode adaptar para diferentes produtos
    let preco = 7.90;

    // Obter os complementos selecionados
    let complementosSelecionados = [];
    document.querySelectorAll('.complemento:checked').forEach(function(elemento) {
        complementosSelecionados.push(elemento.value);
    });

    // Obter a fruta selecionada
    let frutaSelecionada = '';
    let frutaCheckbox = document.querySelector('.fruta:checked');
    if (frutaCheckbox) {
        frutaSelecionada = frutaCheckbox.value;
    }

    // Adicionar ao carrinho
    adicionarAoCarrinho(produto, complementosSelecionados, frutaSelecionada, preco);

    alert('Item adicionado ao carrinho!');
});

