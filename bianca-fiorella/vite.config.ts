import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig((configEnv) => {
  const dotnetVersion = "net9.0";
  const isProduction = configEnv.mode === "production";
  const dotnetFolder = isProduction ? "Release" : "Debug";
  return {
    build: {
      outDir: `../BiancaFiorellaPortfolio/bin/${dotnetFolder}/${dotnetVersion}/${(isProduction ? 'publish/' : '')}dist`,
      emptyOutDir: true,
      copyPublicDir: true,
    },
    plugins: [react()],
  };
});