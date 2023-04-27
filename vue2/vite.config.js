import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  configureWebpack: {
    resolve: {
      // 在这里添加自定义元素
      alias: {
        vue: 'vue/dist/vue.js'
      }
    }
  },
  compilerOptions: {
    isCustomElement: (tag) => tag.startsWith('el-')
  }
  
  
});
