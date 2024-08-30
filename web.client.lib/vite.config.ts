import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, tsconfigPath: './tsconfig.app.json', exclude: ["**/*.stories.ts", "**/*.test.tsx"]}),
  ],
  build: { 
    lib: { 
      entry: './src/index.ts', 
      name: 'web.client.lib', 
      fileName: (format) => `web.client.lib.${format}.js`,
      formats: ['es'],
    }, 
    rollupOptions: { 
      external: Object.keys(peerDependencies), 
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } } 
    }
  },
})