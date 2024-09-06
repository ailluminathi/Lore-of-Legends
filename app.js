function pesquisar() {
    // Obtém o valor do input de pesquisa
    let input = document.getElementById("input-pesquisa");
    let valorPesquisa = input.value.trim().toLowerCase();

    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Se o valor da pesquisa estiver vazio, limpa os resultados e esconde a seção
    if (valorPesquisa === "") {
        section.innerHTML = "";
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

    // Mostra a seção de resultados se houver resultados; caso contrário, oculta
    if (resultados.trim() === "") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}
