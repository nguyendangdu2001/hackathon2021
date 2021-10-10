import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import eslint from "@rbnlffl/rollup-plugin-eslint";
// import eslintPlugin from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    eslint({
      extensions: ["js", "jsx", "ts", "tsx"],
      filterInclude: ["**/*.{js,ts,jsx,tsx}"],
      throwOnError: true,
    }),
  ],
  define: {
    global: "window",
  },
  resolve: {
    alias: {
      "@pages": resolve(__dirname, "./src/pages"),
      "@hooks": resolve(__dirname, "./src/common/hooks"),
      "@components": resolve(__dirname, "./src/common/components"),
      "@action": resolve(__dirname, "./src/redux/action"),
      "@config": resolve(__dirname, "./src/config"),
      "@helper": resolve(__dirname, "./src/helper"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@redux": resolve(__dirname, "./src/redux"),
      "@icon": resolve(__dirname, "./src/common/components/icons"),
    },
  },
});
