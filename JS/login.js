function buscarCep() {
    var cep = document.getElementById('cep').value;
    cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cep !== "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        document.getElementById('logradouro').value = data.logradouro;
                        document.getElementById('bairro').value = data.bairro;
                        document.getElementById('localidade').value = data.localidade;
                        document.getElementById('estado').value = data.uf;
                    } else {
                        alert("CEP não encontrado.");
                    }
                })
                .catch(error => console.error('Erro ao buscar o CEP:', error));
        } else {
            alert("Formato de CEP inválido.");
        }
    }
}

// Função para salvar os dados no LocalStorage e redirecionar para a página de login
document.getElementById('cadastro-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var telefone = document.getElementById('telefone').value;
    var cep = document.getElementById('cep').value;
    var logradouro = document.getElementById('logradouro').value;
    var bairro = document.getElementById('bairro').value;
    var localidade = document.getElementById('localidade').value;
    var estado = document.getElementById('estado').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    // Verifica se todos os campos estão preenchidos
    if (nome && sobrenome && telefone && cep && logradouro && bairro && localidade && estado && email && senha) {
        var dados = {
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            localidade: localidade,
            estado: estado,
            email: email,
            senha: senha
        };

        // Salva os dados no LocalStorage
        localStorage.setItem('dadosCadastro', JSON.stringify(dados));

        // Alerta de sucesso
        alert('Cadastro realizado com sucesso! Redirecionando para a página de login.');

        // Redireciona para a página de login
        window.location.href = 'login.html';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});