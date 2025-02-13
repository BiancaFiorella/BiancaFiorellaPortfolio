import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig((configEnv) => {
  const dotnetVersion = "net9.0";
  const dotnetFolder = configEnv.mode === "production" ? "Release" : "Debug";
  return {
    build: {
      outDir: `../BiancaFiorellaPortfolio/bin/${dotnetFolder}/${dotnetVersion}/dist`,
      emptyOutDir: true,
      copyPublicDir: true,
    },
    plugins: [react()],
  };
});