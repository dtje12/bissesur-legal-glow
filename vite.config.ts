import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Production optimizations
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove all console.* calls
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
      },
      mangle: true, // Obfuscate variable names
      format: {
        comments: false, // Remove comments
      },
    },
    sourcemap: false, // No source maps in production
    rollupOptions: {
      output: {
        // Obfuscate chunk names
        chunkFileNames: "assets/[hash].js",
        entryFileNames: "assets/[hash].js",
        assetFileNames: "assets/[hash].[ext]",
      },
    },
  },
}));
