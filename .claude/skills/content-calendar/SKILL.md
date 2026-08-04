---
name: content-calendar
description: Cria e atualiza o calendário editorial mensal do Instagram do Instituto BZN (marketing/calendar/) com pauta, formato, responsável (agente) e status. Use no início de cada mês ou quando o usuário pedir "pauta do mês"/planejamento de conteúdo.
---

# content-calendar — Calendário editorial (Instituto BZN)

## Objetivo
Manter um plano de publicação simples, em Markdown, que qualquer pessoa (ou
agente) consiga abrir e continuar de onde parou — sem depender de ferramenta
externa.

## Estrutura do arquivo
Um arquivo por mês em `marketing/calendar/AAAA-MM.md`, tabela:

```markdown
# Pauta — Agosto 2026

| Data | Formato | Tema/Pauta | Status | Arquivo |
|------|---------|------------|--------|---------|
| 05/08 | Feed | Abertura de matrículas do curso X | Rascunho | marketing/output/2026-08-05-matriculas.png |
| 07/08 | Story | Reforço do post de matrículas | Planejado | — |
| 12/08 | Reels | Bastidores de uma aula | Planejado | marketing/calendar/roteiros/2026-08-12-bastidores.md |
| 20/08 | Citação | Frase de aluna sobre o curso | Planejado | — |
```

Status possíveis: `Planejado` → `Rascunho` → `Pronto` → `Publicado`.

## Passo a passo
1. No início do mês (ou quando pedido), levante 6–10 pautas equilibrando formatos:
   mínimo 1 Reels/semana, 2–3 feed/semana, stories de reforço, 1 citação/quinzena.
2. Priorize pautas ligadas a fatos reais do Instituto (turmas, eventos, depoimentos,
   datas comemorativas relevantes ao público) — nunca invente dados, números ou
   depoimentos; se faltar informação, marque `Status: Precisa de input` e liste
   exatamente o que falta.
3. Crie/atualize a tabela do mês em `marketing/calendar/AAAA-MM.md`.
4. Para cada item, ao produzir a peça, use as skills `ig-post`, `ig-story` ou
   `ig-reels-script` e atualize a coluna `Arquivo` e `Status`.
5. Ao final do mês, arquive o calendário (mantenha o histórico — não apague).
