/*
  ATIVIDADE PRÁTICA — LEITURA E ALTERAÇÃO DO DOM

  Regras:
  1. Não altere o arquivo atividade21.html.

  2. Faça todas as mudanças neste arquivo.
  3. Utilize document.querySelector() em todas as seleções.
  4. Utilize textContent para textos comuns e dados informados pelo usuário.
  5. Utilize innerText somente nas tarefas indicadas.
  6. Utilize innerHTML somente com conteúdos definidos no próprio código.
  7. Nunca insira dados do usuário com innerHTML ou outerHTML.
  8. Utilize outerHTML somente na tarefa indicada.
  9. Confira cada alteração no navegador e no Console.
*/


// 01. Solicite o nome do estudante e altere a mensagem de
// boas-vindas utilizando textContent.
const nomeEstudante = window.prompt("Qual é o seu nome?");
document.querySelector("#mensagem-boas-vindas").textContent =
  `Bem-vindo(a), ${nomeEstudante?.trim() || "visitante"}!`;

// 02. Mostre no Console o texto atual do nome da loja usando
// textContent. Depois, altere o nome da loja com textContent.
const nomeLoja = document.querySelector("#nome-loja");
console.log(nomeLoja.textContent);
nomeLoja.textContent = "Loja de Informática";

// 03. Altere o título principal da página utilizando textContent.
const títuloPrincipal = document.querySelector("#titulo-principal");
títuloPrincipal.textContent = "Loja de informática!";
// 04. Mostre no Console o texto visível do subtítulo utilizando
// innerText. Depois, altere o subtítulo com innerText.
const subtitulo = document.querySelector("#subtitulo-principal");
console.log(subtitulo.innerText);
subtitulo.innerText = "Tecnologia para seus estudos, trabalho e programação.";

// 05. Insira o aviso de promoção utilizando innerHTML.
// O aviso deve possuir pelo menos uma tag <strong> e uma tag <span>.
document.querySelector("#aviso-promocao").innerHTML =
  "<strong>Promoção da semana!</strong> <span>Confira as ofertas do catálogo.</span>";

// 06. Altere a categoria do produto em destaque utilizando
// textContent.
document.querySelector("#categoria-destaque").textContent = "Notebooks";

// 07. Altere o nome do produto em destaque utilizando innerText.
document.querySelector("#nome-produto-destaque").innerText = "Notebook para programação";

// 08. Mostre no Console o textContent e o innerText da descrição
// do produto. Depois, altere a descrição utilizando innerText.
const descricaoProduto = document.querySelector("#descricao-produto-destaque");
console.log(descricaoProduto.textContent);
console.log(descricaoProduto.innerText);
descricaoProduto.innerText = "Notebook com 16 GB de memória RAM e SSD de 512 GB para estudar, trabalhar e programar.";

// 09. Altere o preço do produto em destaque utilizando textContent.
document.querySelector("#preco-produto-destaque").textContent = "R$ 3.499,90";

// 10. Altere a situação do estoque utilizando innerHTML.
// Destaque a situação com uma tag <strong>.
// Utilize somente um texto definido no próprio código.
document.querySelector("#status-estoque").innerHTML = "<strong>Disponível</strong> em estoque";

// 11. Atualize as três estatísticas do catálogo.
// Utilize textContent na primeira, innerText na segunda e
// innerHTML com uma tag <strong> na terceira.
document.querySelector("#total-produtos").textContent = "4";
document.querySelector("#total-categorias").innerText = "4";
document.querySelector("#total-ofertas").innerHTML = "<strong>1</strong>";

// 12. Altere os nomes dos três produtos secundários.
// Utilize textContent para impedir que possíveis tags sejam
// interpretadas pelo navegador.
document.querySelector("#nome-produto-01").textContent = "Teclado USB";
document.querySelector("#nome-produto-02").textContent = "Mouse óptico USB";
document.querySelector("#nome-produto-03").textContent = "Monitor Full HD";

// 13. Atualize a lista de benefícios utilizando innerHTML.
// Crie pelo menos três elementos <li> dentro da lista.
document.querySelector("#lista-beneficios").innerHTML =
  "<li>Produtos para estudos e programação.</li>" +
  "<li>Atendimento para ajudar na escolha.</li>" +
  "<li>Ofertas em equipamentos de informática.</li>";

// 14. Atualize automaticamente o ano do rodapé utilizando
// new Date().getFullYear() e textContent.
document.querySelector("#ano-atual").textContent = new Date().getFullYear();

// 15. Mostre no Console o outerHTML do texto final do rodapé.
// Depois, utilize outerHTML para substituir completamente esse
// elemento por uma nova tag <p> com classe e conteúdo diferentes.
// Após a substituição, selecione novamente o novo elemento e
// mostre seu outerHTML no Console.
const textoRodape = document.querySelector("#texto-rodape");
console.log(textoRodape.outerHTML);
textoRodape.outerHTML = '<p class="texto-rodape-atualizado" id="texto-rodape-atualizado">Loja de Informática — Tecnologia para aprender e criar.</p>';
const novoTextoRodape = document.querySelector("#texto-rodape-atualizado");
console.log(novoTextoRodape.outerHTML);
