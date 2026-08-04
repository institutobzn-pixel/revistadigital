---
name: ig-post
description: Gera artes de post de Instagram (feed 4:5 ou card de citação 1:1) do Instituto BZN a partir dos templates de marca em marketing/templates/, prontas em PNG de alta resolução. Use sempre que for produzir uma arte de feed ou card de citação para o Instagram do Instituto.
---

# ig-post — Arte de feed / card de citação (Instituto BZN)

Gera peças visuais on-brand sem depender de designer humano, reaproveitando os
templates HTML da marca (`marketing/templates/post-feed.html` e
`marketing/templates/post-quote.html`) e o Chromium pré-instalado do ambiente.

## Quando usar
- Post de feed com foto + manchete curta (ex.: cobertura de evento, chamada de curso, resultado).
- Card de citação (frase de entrevistado, aluno, diretora) sem foto.

## Passo a passo
1. Leia `marketing/brand/brand.json` para confirmar paleta, tom de voz e tamanhos.
2. Copie o template adequado para um arquivo de trabalho, ex.:
   `cp marketing/templates/post-feed.html /tmp/post-2026-08-04.html`
3. Substitua os tokens `{{...}}` pelo conteúdo real:
   - `post-feed.html`: `{{IMAGEM}}` (caminho local ou URL para a foto), `{{KICKER}}` (rótulo curto, ex. "EVENTO"), `{{TITULO}}` (manchete curta, estilo editorial), `{{SUBTITULO}}`, `{{DATA}}`.
   - `post-quote.html`: `{{CITACAO}}`, `{{AUTOR}}`.
   Escreva o texto seguindo o tom de voz de `brand.json` (acolhedor, credível, sem jargão, sem excesso de emoji).
4. Renderize em PNG com o script pronto:
   ```
   cd marketing/scripts && npm install --no-audit --no-fund >/dev/null 2>&1  # só na 1a vez
   node render.mjs /tmp/post-2026-08-04.html ../output/post-2026-08-04.png 1080 1350
   ```
   Para o card de citação use `1080 1080`.
5. Confira o PNG gerado em `marketing/output/` (abra com a ferramenta de leitura de imagem antes de considerar pronto — nunca entregue sem checar visualmente).
6. Gere a legenda correspondente com a skill/agente de copywriting (ver `social-copywriter`), salvando junto no calendário de conteúdo.

## Notas de qualidade
- Nunca deixe um token `{{...}}` sem substituir no HTML antes de renderizar.
- Se a foto de origem não tiver o tratamento duotom da marca, aplique-o (ver `art-director` agent) antes de usar no template — fotos "cruas" quebram a identidade visual.
- Textos de manchete devem caber em 2-3 linhas no tamanho definido no template; se estourar, encurte o texto em vez de reduzir a fonte.
