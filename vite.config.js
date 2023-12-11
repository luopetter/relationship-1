import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

// name: 依赖包的名称
// var: 包暴露的全局变量名称
// path: cdn 链接地址

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    importToCDN({
      modules: [
        {
          name: "vue",
          var: "Vue",
          path: "https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.min.js",
        },
        {
          name: "element-plus",
          var: "ElementPlus",
          path: "https://cdn.jsdelivr.net/npm/element-plus@2.3.14/dist/index.full.min.js",
          css: "https://cdn.jsdelivr.net/npm/element-plus@2.3.14/dist/index.min.css",
        },
      ],
    }),
  ],
  server: {
    host: '0.0.0.0'
  }

})
