# Revista Digital do Instituto BZN

Layout de revista digital, responsivo e acolhedor, pensado para transmitir **credibilidade** e reunir entrevistas, artigos de interesse geral e as realizações do Instituto Brasa Zona Norte.

O `index.html` é a **Edição Especial de 1 Ano** (a 5ª edição) inteira remontada no layout editorial, com o conteúdo e as fotos reais do Instituto — serve como modelo para as próximas edições.

- **Formato:** página única (rola de cima a baixo). Ótimo para compartilhar por link e ler no celular.
- **Autocontido:** um único arquivo `index.html` (fotos embutidas). Abra no navegador e pronto.

## Seções desta edição
1. **Capa** — foto real da equipe em duotom (tons da marca) + manchete.
2. **Carta do editor** — abertura curta e humana.
3. **Sumário** — lista tipográfica com todas as seções e páginas.
4. **Destaques do ano** — o que foi construído no primeiro ano.
5. **Especial · Aniversário** — a reportagem do evento de 1 ano.
6. **Entrevistas** — Adriana Paz (diretora), Drª Lúcia Del Rio (psicóloga) e Jussély Acioly (empresária).
7. **Atividades que iniciaram em abril** — os novos cursos e oficinas.
8. **Artigo** — "IA para pessoas comuns", do Dr. Tiago Cavalcanti Tabajara.
9. **Agenda** — cursos e palestras do mês.
10. **Salas de atendimento** — galeria da estrutura.
11. **Contato / Como ajudar** e rodapé.

## Design
Paleta enxuta e harmônica: **azul naval `#132C42` + papel creme `#F5EFE4` + um único acento terracota `#B26A4C`**. Títulos em Fraunces (serifada editorial), texto em Inter. As cores ficam no `:root` do `<style>`.

Tratamentos editoriais aplicados: capa em **duotom** (unifica a cor da foto), **capitular**, **olho (pull quote)**, tratamento de **entrevista (pergunta/resposta)**, galerias e cartões de agenda.

## Como criar a próxima edição
1. Duplique `index.html` (ex.: `edicao-07.html`).
2. Troque textos nos blocos `<article>` / `<section>` e as fotos (tags `<img>`).
3. Atualize capa, sumário e data.

As fotos estão embutidas em base64 para o arquivo ser autocontido. Num fluxo de produção, o ideal é trocar por arquivos otimizados em `assets/` referenciados por caminho relativo.

## Regenerar a partir do PDF
O script que extrai fotos/textos de um PDF e monta a página está no diretório de trabalho da sessão (PyMuPDF + Pillow). Peça ao editor da revista se precisar reprocessar uma nova edição a partir de um PDF.
