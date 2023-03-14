import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import { build } from "esbuild";

build({
  plugins: [NodeModulesPolyfillPlugin()],
  bundle: true,
  minify: true,
  entryPoints: ["node_modules/@imagemagick/magick-wasm/dist/index.mjs"],
  outfile: "magick-wasm.mjs",
  platform: "neutral",
});
