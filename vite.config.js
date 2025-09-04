import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/cities": "http://localhost:9000",
//     },
//   },
// });

export default defineConfig({
  base: "/",
  plugins: [react()],
});
