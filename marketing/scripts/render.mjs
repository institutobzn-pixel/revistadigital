#!/usr/bin/env node
// Renderiza um template HTML (com {{TOKENS}} já substituídos) em PNG pronto para o Instagram.
// Uso: node render.mjs <template.html> <saida.png> <largura> <altura>
import { chromium } from "playwright";
import path from "node:path";
import { pathToFileURL } from "node:url";

const [, , inputPath, outputPath, widthArg, heightArg] = process.argv;

if (!inputPath || !outputPath) {
  console.error("Uso: node render.mjs <template.html> <saida.png> [largura] [altura]");
  process.exit(1);
}

const width = Number(widthArg) || 1080;
const height = Number(heightArg) || 1350;

// A versão do pacote "playwright" instalada (marketing/scripts/package.json)
// é fixada em 1.56.1 para casar com o Chromium pré-instalado do ambiente.
// Se ainda assim a build não bater, tenta achar um Chromium já instalado
// em PLAYWRIGHT_BROWSERS_PATH antes de desistir.
async function launchChromium() {
  try {
    return await chromium.launch();
  } catch (err) {
    const browsersDir = process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers";
    const fs = await import("node:fs");
    const candidates = fs.existsSync(browsersDir)
      ? fs.readdirSync(browsersDir).filter((d) => /^chromium-\d+$/.test(d))
      : [];
    for (const dir of candidates) {
      const exe = path.join(browsersDir, dir, "chrome-linux", "chrome");
      if (fs.existsSync(exe)) {
        return await chromium.launch({ executablePath: exe });
      }
    }
    throw err;
  }
}

const browser = await launchChromium();
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(path.resolve(inputPath)).href, { waitUntil: "networkidle" });
await page.screenshot({ path: path.resolve(outputPath) });
await browser.close();

console.log(`OK: ${outputPath} (${width}x${height} @2x)`);
