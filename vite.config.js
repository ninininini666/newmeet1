import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import dns from 'node:dns';

// 避免 DNS 解析导致 localhost 指向 IPv6，而 Vite 监听 IPv4
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'SeaMeet – AI Meeting Copilot',
        short_name: 'SeaMeet',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        icons: [{
          src: '/logo.svg',
          sizes: '512x512',
          type: 'image/svg+xml',
          purpose: 'any maskable'
        }]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.(js|css|png|svg)$/,
            handler: 'CacheFirst',
            options: { cacheName: 'static-resources' }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@content': '/src/content'
    }
  },
  server: {
    host: true,            // 允许所有网络接口访问，包括 localhost 和 127.0.0.1
    port: 5173,            // 指定端口
    strictPort: true,      // 如果端口被占用则报错退出，不自动换端口
    open: true,            // 启动时自动在默认浏览器打开
    cors: true,            // 启用 CORS
    hmr: { host: 'localhost' } // 确保 HMR websocket 正确连接
  }
});



/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'SeaMeet – AI Meeting Copilot',
        short_name: 'SeaMeet',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        icons: [
          {
            src: '/logo.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.(js|css|png|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-resources'
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@content': '/src/content'
    }
  }
});
*/