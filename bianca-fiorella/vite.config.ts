import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig((configEnv) => {
  const dotnetVersion = "net9.0";

  const isCi = configEnv.mode === "ci";

  if (isCi) {
    configEnv.mode = "production"
  }

  const isProduction = configEnv.mode === "production";
  const dotnetFolder = isProduction ? "Release" : "Debug";

  const out = (isCi ? process.env.VITE_OUTDIR : `../BiancaFiorellaPortfolio/bin/${dotnetFolder}/${dotnetVersion}`) + '/dist';

  return {
    build: {
      outDir: out,
      emptyOutDir: true,
      copyPublicDir: true,
    },
    plugins: [react()],
  };
});