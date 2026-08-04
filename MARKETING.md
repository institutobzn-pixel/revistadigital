# Time de Marketing do Instituto BZN (100% em Claude)

Este documento descreve o time de marketing digital do Instituto Brasa Zona
Norte, montado inteiramente com agentes e skills do Claude Code — sem
depender de designer, redator, videomaker ou social media humanos — e como
operá-lo no dia a dia.

## Por que este modelo

O objetivo não é "postar mais rápido", é postar **com o mesmo padrão de uma
agência de ponta**: identidade visual impecável e sempre consistente, tom de
voz único em todos os textos, e produção repetível — qualquer pessoa do
Instituto consegue gerar uma peça nova em minutos, sem depender de ninguém
"que entende de Photoshop".

Isso é possível porque cada função de um time de marketing real vira, aqui,
um **agente especialista** (com responsabilidade e regras fixas) apoiado por
**skills** (o "como fazer", reutilizável e testado) e por **templates de
marca** (o "molde" que garante que a identidade nunca varia de peça pra
peça).

## O time

| Papel (equivalente humano) | Agente Claude | Arquivo |
|---|---|---|
| Estrategista de conteúdo / gerente de mídias sociais | `content-strategist` | `.claude/agents/content-strategist.md` |
| Diretor(a) de arte | `art-director` | `.claude/agents/art-director.md` |
| Redator(a) (copywriter) | `social-copywriter` | `.claude/agents/social-copywriter.md` |
| Roteirista / produtor de vídeo | `video-scriptwriter` | `.claude/agents/video-scriptwriter.md` |
| Controle de qualidade / guardião de marca | `brand-guardian` | `.claude/agents/brand-guardian.md` |

Cada agente tem um arquivo `.md` com uma descrição de "quando me chamar" — o
Claude aciona o agente certo automaticamente quando o pedido combina com a
descrição (ex.: pedir "uma arte para o post de amanhã" aciona o
`art-director`). Você (diretor do Instituto) continua no comando: pede em
linguagem natural, o time interno se organiza.

## As skills (o "como fazer" de cada função)

| Skill | O que produz | Arquivo |
|---|---|---|
| `content-calendar` | Pauta mensal em Markdown, com formato/status de cada peça | `.claude/skills/content-calendar/SKILL.md` |
| `ig-post` | Post de feed (4:5) ou card de citação (1:1) em PNG | `.claude/skills/ig-post/SKILL.md` |
| `ig-story` | Story (9:16) em PNG | `.claude/skills/ig-story/SKILL.md` |
| `ig-reels-script` | Roteiro de Reels pronto para gravar com celular | `.claude/skills/ig-reels-script/SKILL.md` |

## O kit de marca (a fonte única de verdade)

`marketing/brand/brand.json` — cores, tipografia, tom de voz e formatos,
extraídos da identidade já usada na Revista Digital (`index.html`): azul
naval `#132C42`, papel creme `#F5EFE4`, acento terracota `#B26A4C`, títulos
em Fraunces, texto em Inter. **Todo agente e toda skill leem esse arquivo
antes de produzir qualquer coisa** — é o que garante que uma arte feita hoje
e outra feita daqui a 6 meses pareçam da mesma marca.

## Os templates (o motor de produção)

`marketing/templates/` — 3 moldes HTML prontos (feed, story, citação), no
padrão visual da revista. Uma skill preenche os textos/foto e roda
`marketing/scripts/render.mjs`, que usa o Chromium já instalado no ambiente
para "tirar uma foto" do HTML em altíssima resolução (2x) — isso substitui
o trabalho manual de um designer no Photoshop/Canva, com resultado
consistente toda vez.

```
marketing/
├── brand/brand.json          ← paleta, tipografia, tom de voz
├── templates/                ← moldes HTML (feed, story, citação)
├── scripts/render.mjs        ← HTML → PNG pronto para postar
├── calendar/AAAA-MM.md       ← pauta do mês
├── calendar/roteiros/        ← roteiros de Reels
└── output/                   ← artes finais (PNG) prontas para publicar
```

## Passo a passo para operar (o dia a dia)

**1. Uma vez, ao clonar o projeto:**
```
cd marketing/scripts && npm install
```
(instala o Playwright na versão fixada em `package.json`, já compatível com o
Chromium pré-instalado — não precisa baixar navegador de novo.)

**2. Início do mês — pedir a pauta:**
> "Monte a pauta de conteúdo de [mês] para o Instagram do Instituto."

O `content-strategist` cria/atualiza `marketing/calendar/AAAA-MM.md` com os
temas, formatos e datas, sempre baseado em fatos reais (turmas, eventos,
depoimentos) — nunca inventa conteúdo.

**3. Para cada peça — pedir a produção:**
> "Produza a arte e a legenda do post de [dia] sobre [tema]."

O `art-director` gera o PNG (via skill `ig-post`/`ig-story`) e o
`social-copywriter` escreve a legenda, CTA e hashtags — os dois trabalham
juntos, arte e texto nascem alinhados.

**4. Vídeo/Reels:**
> "Escreva o roteiro do Reels de [tema]."

O `video-scriptwriter` entrega um roteiro pronto pra gravar com celular
(gancho, cenas, texto na tela, CTA, legenda).

**5. Antes de publicar — controle de qualidade:**
> "Revise essa peça antes de eu publicar."

O `brand-guardian` confere cores, tipografia, tom de voz, veracidade dos
dados e formato — só depois disso a peça deve ir ao ar.

**6. Publicar:** o PNG final está em `marketing/output/`; baixe e publique
manualmente no Instagram (o Claude não tem acesso à conta do Instagram —
publicação continua sendo uma ação humana, de propósito, por segurança).

## Atualizar a identidade visual com poucos cliques

Para mudar uma cor, fonte ou tom de voz em **todas** as peças futuras de uma
vez, edite só `marketing/brand/brand.json` (e o `:root{...}` correspondente
nos 3 arquivos de `marketing/templates/`, que hoje replicam os mesmos
valores). Não é preciso tocar em nenhum agente ou skill — todos leem essa
fonte única.

Para criar um **novo formato de peça** (ex.: carrossel, capa de Reels),
duplique o template mais parecido em `marketing/templates/`, ajuste o
tamanho (`width`/`height` no HTML e no comando do `render.mjs`) e crie uma
nova skill em `.claude/skills/` no mesmo padrão das existentes — a partir daí
qualquer agente já sabe usá-la.

## Próximos passos sugeridos
- [ ] Trocar as fotos placeholder por fotos reais e recentes do Instituto (tratadas em duotom).
- [ ] Preencher a primeira pauta real do mês com o `content-strategist`.
- [ ] Definir a rotina de quem baixa e publica as peças finais no Instagram.
- [ ] Se o volume crescer, considerar automatizar a publicação via API oficial da Meta — decisão que envolve credenciais e deve ser tomada explicitamente pelo Instituto, não pelo time de Claude.
