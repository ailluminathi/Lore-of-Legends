function pesquisar() {
    // Obtém o valor do input de pesquisa
    let input = document.getElementById("input-pesquisa");
    let valorPesquisa = input.value.trim().toLowerCase();

    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o parágrafo de erro
    let erroParagrafo = document.getElementById("erro-pesquisa");

    // Limpa os resultados e oculta a mensagem de erro
    section.innerHTML = "";
    erroParagrafo.style.display = "none";

    // Se o valor da pesquisa estiver vazio, exibe mensagem de erro
    if (valorPesquisa === "") {
        erroParagrafo.innerText = "Digite um campeão.";
        erroParagrafo.style.display = "block";
        section.style.display = "none";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada elemento (dado) do array 'personagens'
    for (let dado of personagens) {
        // Verifica se o título do personagem inclui o valor da pesquisa
        if (dado.titulo.toLowerCase().includes(valorPesquisa)) {
            // Concatena HTML para criar um novo elemento de resultado
            resultados += `
                <section class="item-resultado">
                  <img src="${dado.imagem}" alt="${dado.titulo}">
                  <div class="item-resultado-descricao">
                    <h1>${dado.titulo}</h1>
                    <p>${dado.descricao}<br><a href="${dado.link}">Continuar lendo</a></p>
                  </div>
                </section>
            `;
        }
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;

    // Verifica se encontrou algum resultado
    if (resultados.trim() === "") {
        erroParagrafo.innerText = "Campeão não encontrado ou não cadastrado.";
        erroParagrafo.style.display = "block";
        section.style.display = "none";
    } else {
        erroParagrafo.style.display = "none";
        section.style.display = "flex";
    }
}