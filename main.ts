import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = new URL("./entry.png", import.meta.url);
const dest = `${outDir}/entry.png`;
copyFileSync(src, dest);
if (!readFileSync(src).equals(readFileSync(dest))) {
  throw new Error("entry.png copy mismatch");
}
if (statSync(src).size !== statSync(dest).size) {
  throw new Error("entry.png size mismatch");
}
