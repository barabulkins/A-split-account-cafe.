export default {
  server: {
    port: 5173,
    proxy: {
      '/dishes': 'http://localhost:3003',
      '/menu': 'http://localhost:3003',
      '/img': 'http://localhost:3003',
      '/models': 'http://localhost:3003'
    }
  },
  build: {
    outDir: './public-dist',
    emptyOutDir: true
  }
};
