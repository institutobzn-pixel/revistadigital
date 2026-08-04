---
name: ig-story
description: Gera artes de Stories do Instagram (9:16) do Instituto BZN a partir do template de marca em marketing/templates/post-story.html, em PNG pronto para publicar. Use para stories de divulgação, bastidores, avisos e enquetes com fundo on-brand.
---

# ig-story — Arte de Stories (Instituto BZN)

## Quando usar
- Divulgação rápida de um post do feed (reforço em Stories).
- Avisos (inscrições abertas, mudança de horário, lembrete de evento).
- Bastidores com foto do dia a dia do Instituto.

## Passo a passo
1. Copie `marketing/templates/post-story.html` para um arquivo de trabalho.
2. Preencha os tokens: `{{IMAGEM}}`, `{{KICKER}}`, `{{TITULO}}`, `{{SUBTITULO}}`, `{{CTA}}` (ex.: "Arraste para cima", "Link na bio", "Vagas limitadas").
3. Respeite a "área segura" do template (já embutida no CSS `.safe`/`.cta`) para não cortar texto nos cantos onde o Instagram sobrepõe ícones de perfil/reação.
4. Renderize:
   ```
   cd marketing/scripts
   node render.mjs /tmp/story.html ../output/story-2026-08-04.png 1080 1920
   ```
5. Verifique visualmente o PNG antes de entregar.

## Notas
- Um Story deve ter no máximo 1 ideia central — não empilhe título + subtítulo + CTA longos.
- Se o Story for reforço de um post de feed, reaproveite o mesmo `{{TITULO}}` para manter consistência entre os dois.
