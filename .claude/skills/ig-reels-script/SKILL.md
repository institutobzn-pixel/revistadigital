---
name: ig-reels-script
description: Escreve roteiros completos de Reels/vídeos curtos para o Instagram do Instituto BZN — gancho, cenas, texto na tela, narração/legenda e CTA — prontos para gravação com celular ou montagem simples. Use sempre que for planejar um vídeo/Reels.
---

# ig-reels-script — Roteiro de Reels (Instituto BZN)

O Instituto não tem equipe de vídeo dedicada, então o roteiro precisa ser
gravável por qualquer pessoa da equipe com um celular, sem improviso no dia.

## Estrutura obrigatória do roteiro (entregar sempre neste formato)

```
TÍTULO INTERNO: 
DURAÇÃO ALVO: 15–30s (padrão) | 30–60s (institucional/depoimento)
GANCHO (0–2s): <frase ou imagem que trava o scroll>
CENAS:
  1. [PLANO] descrição do que aparece | TEXTO NA TELA: "..." | ÁUDIO/FALA: "..."
  2. ...
CTA FINAL: <ex. "Siga @institutobzn", "Link na bio", "Comente ABAIXO">
LEGENDA (caption): <2–4 frases no tom de voz da marca + 1 pergunta para engajamento>
HASHTAGS: <5–8 tags: mix de marca + tema + comunidade/zona norte>
TRILHA SUGERIDA: <estilo/mood, ex. "instrumental suave", nunca indicar música protegida sem verificar uso comercial>
```

## Regras de tom e formato
- Gancho sempre nos primeiros 2 segundos — pergunta, dado surpreendente ou frase de impacto, nunca "Oi gente, hoje vamos falar sobre...".
- Texto na tela: frases curtas (até ~6 palavras por card), letra grande — é vídeo mudo por padrão.
- Use o tom de voz de `marketing/brand/brand.json` (acolhedor, credível, sem jargão corporativo).
- Formatos recorrentes que funcionam bem para institutos sociais: "bastidores de uma aula", "depoimento de 20s", "antes/depois de uma turma", "explicando um projeto em 3 cenas", "dia na vida de um educador/aluno".
- Sempre incluir 1 CTA claro e nunca mais que um.

## Passo a passo de uso
1. Pergunte (ou infira do calendário de conteúdo) o tema e o objetivo do vídeo (engajamento, captação de alunos, prestação de contas a doadores, etc.).
2. Escreva o roteiro completo no formato acima.
3. Salve em `marketing/calendar/roteiros/` com nome `AAAA-MM-DD-tema.md`.
4. Se houver arte de apoio (capa do Reels, cards de texto na tela), gere com a skill `ig-post`/`ig-story` reaproveitando o template de citação para os cards de texto.
