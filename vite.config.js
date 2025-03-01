import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/IpowerCom/" // ✅ Make sure it starts with a "/"
});
