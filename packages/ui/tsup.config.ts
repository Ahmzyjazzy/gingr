import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/**/*.tsx", "src/**/*.ts"],
  dts: true,
  minify: true,
  clean: true,
  format: ["esm"],
  external: ["react"],
  ...options,
}));
