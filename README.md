# Revista BZN — Revista digital do Instituto Brasa Zona Norte

Layout de revista digital, responsivo e acolhedor, pensado para transmitir **credibilidade** e reunir **artigos de interesse geral** e as **realizações** do Instituto.

- **Formato:** página única (o leitor rola de cima a baixo). Ótimo para compartilhar por link e ler no celular.
- **Uma edição = 3 a 4 artigos** + carta do editor, sumário e chamada para ação.
- **Sem dependências pesadas:** é um único arquivo `index.html`. Abra no navegador e pronto.

## Como visualizar

Abra o arquivo `index.html` no navegador (duplo clique já funciona).

## Estrutura de uma edição

1. **Masthead** — cabeçalho fixo com a marca e o menu.
2. **Capa** — manchete da edição (o artigo mais forte) + foto de capa.
3. **Carta do editor** — texto curto e humano que abre a edição.
4. **Nesta edição (sumário)** — cartões que levam a cada artigo.
5. **Artigos (3 a 4)** — cada um com etiqueta de seção, título, autor, foto e texto:
   - `Em pauta` — reportagem de interesse geral (a de capa)
   - `Vozes` — artigo assinado por um convidado/especialista
   - `Nossas realizações` — matéria com números e impacto
   - `Gente BZN` — perfil de uma pessoa real *(opcional, o 4º artigo)*
6. **Como ajudar** — doação / voluntariado.
7. **Rodapé** — marca, links e contato.

Publicar **3 ou 4 artigos** é só ter 3 ou 4 blocos `<article>` — o layout se adapta sozinho.

## Como trocar o conteúdo

Tudo fica em `index.html`. Procure os comentários `<!-- ARTIGO X -->` e substitua:

- **Título e chamada:** dentro de `<h2>` e do parágrafo `.dek`.
- **Autor:** no bloco `.article-meta`.
- **Texto:** dentro de `<div class="body">` (o primeiro parágrafo tem a classe `lead`, que gera a letra capitular).
- **Citação de destaque:** parágrafo com a classe `pullquote`.
- **Números (Realizações):** bloco `.stats-grid`.

### Fotos
As imagens estão como **espaços reservados** (blocos coloridos com a etiqueta "Imagem"). Para usar fotos reais, substitua cada `<div class="frame ...">` por uma tag de imagem, por exemplo:

```html
<img src="assets/foto-capa.jpg" alt="Descreva a foto para acessibilidade">
```

Prefira **fotos reais do Instituto**, com pessoas e luz natural — elas passam mais autoridade do que qualquer banco de imagens.

## Identidade visual

Baseada na marca do Instituto:

| Cor | Uso | Código |
|-----|-----|--------|
| Azul naval | Cor principal (títulos, masthead, faixas) | `#002B5C` |
| Azul vibrante | Destaque (etiquetas, links) | `#2F6BE0` |
| Areia | Fundo quente / faixas suaves | `#E7DDCD` |
| Creme | Fundo da página | `#FBF8F2` |

As cores ficam todas no topo do `<style>`, em `:root` — mudar num lugar só atualiza a revista inteira.

**Regra de ouro:** o azul naval aparece em detalhes; o "palco" da leitura é claro e neutro. Isso é o que faz parecer revista, e não folheto.

### Tipografia
- **Títulos:** Fraunces (serifada, editorial e acolhedora).
- **Texto:** Inter (sem serifa, ótima leitura em tela).

As fontes são carregadas do Google Fonts. Em ambientes sem internet, o layout cai automaticamente para Georgia + fonte do sistema, sem quebrar.

### Logo
O cabeçalho usa o **símbolo do coração** da marca desenhado em SVG, como aproximação. Para usar o **logo oficial**, coloque o arquivo em `assets/` (ex.: `assets/logo.svg`) e troque o bloco `<a class="brand">` no masthead e no rodapé por uma tag de imagem.

## Próximas edições
Duplique o `index.html` (ex.: `edicao-02.html`), troque o conteúdo e atualize a data na capa. A estrutura já está pronta para repetir.
