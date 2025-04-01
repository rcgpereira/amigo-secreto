let listaAmigos = [];


function adicionar () {

    // Método trim() elimina os espaços no inicio e final da string impedindo que seja digitado apenas ' '
    // Método toUpperCase() facilita a comparação de nomes iguais com maiúsculas em caractéres diferentes
    let amigo = document.getElementById('nome-amigo').value.toUpperCase().trim(); 

    // Verifica se o campo foi digitado ou se está repetido no array listaAmigos
    if (amigo && !listaAmigos.includes(amigo)) {

        // Adiciona o amigo digitado na lista de amigos
        listaAmigos.push(amigo);

        // Atualiza o campo "Amigos incluídos"
        document.getElementById('lista-amigos').textContent = listaAmigos.join(' - ');

        // Reset no campo "Nome do Amigo"
        document.getElementById('nome-amigo').value = '';

    } else {

        // Retorna mensagem de erro caso campo esteja vazio ou com apenas espaços digitados
        alert ('Campo inválido ou repetido.');
    }

    
}

function reiniciar () {

    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';

}

function sortear () { 

    // Verifica se há mais de 3 elemento a listaAmigos para efetuar o sorteio
    if (listaAmigos.length > 3) {
        
        console.log('Lista de Amigos = ', listaAmigos);

        embaralhar(listaAmigos);
        console.log('Lista embaralhada = ', listaAmigos);
        let sorteio = document.getElementById('lista-sorteio');

        for (let i = 0; i < listaAmigos.length; i++) {

            if (i == listaAmigos.length - 1) {
                sorteio.innerHTML += listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';
            } else {
                sorteio.innerHTML += listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>';
            }
        
        }

    } else {

        // Retorna mensagem de erro caso só tenha um nome para sortear
        alert('Inclua mais nomes para efetuar o sorteio.');
    }
    
}

// Function para embaralhar array fornecida pelo curso Alura
// Algoritmo de Fisher Yates conhecido como Knuth Shuffle
function embaralhar (lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice-1]];
    }

}
