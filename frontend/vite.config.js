import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Mattime frontend. This config enables the
// React plugin so that JSX and other React-specific features are
// compiled correctly. Additional plugins or configuration options can
// be added here as the project evolves.
export default defineConfig({
  plugins: [react()],
});
