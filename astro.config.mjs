// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://projects.avetavos.com',
  base: '/shopmicro',
  output: 'static',
  integrations: [starlight({
    title: 'ShopMicro — Real-World Project',
    head: [
      { tag: 'script', attrs: { type: 'module', src: '/shopmicro/mermaid-init.js' } },
      { tag: 'link', attrs: { rel: 'manifest', href: '/shopmicro/manifest.webmanifest' } },
      { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/shopmicro/apple-touch-icon.png' } },
      { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/shopmicro/icon-192.png' } },
      { tag: 'meta', attrs: { name: 'theme-color', content: '#00ADD8' } },
    ],
    defaultLocale: 'en',
    locales: {
      en: { label: 'English', lang: 'en' },
      th: { label: 'ไทย', lang: 'th' },
    },
    customCss: ['./src/styles/custom.css'],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/realworld-shopmicro' }],
    sidebar: [
      { label: 'Introduction', items: [{ autogenerate: { directory: 'introduction' } }] },
      { label: '1 · Setup & Tooling', items: [{ autogenerate: { directory: 'setup' } }] },
      { label: '2 · Protobuf & gRPC', items: [{ autogenerate: { directory: 'proto-grpc' } }] },
      { label: '3 · Catalog Service', items: [{ autogenerate: { directory: 'catalog-service' } }] },
      { label: '4 · Order Service', items: [{ autogenerate: { directory: 'order-service' } }] },
      { label: '5 · API Gateway', items: [{ autogenerate: { directory: 'gateway' } }] },
      { label: '6 · Kafka (Event Stream)', items: [{ autogenerate: { directory: 'kafka' } }] },
      { label: '7 · RabbitMQ (Work Queues)', items: [{ autogenerate: { directory: 'rabbitmq' } }] },
      { label: '8 · Payment Service', items: [{ autogenerate: { directory: 'payment-service' } }] },
      { label: '9 · Order Saga', items: [{ autogenerate: { directory: 'saga' } }] },
      { label: '10 · Notification Service', items: [{ autogenerate: { directory: 'notification-service' } }] },
      { label: '11 · Resilience', items: [{ autogenerate: { directory: 'resilience' } }] },
      { label: '12 · Testing', items: [{ autogenerate: { directory: 'testing' } }] },
      { label: '13 · Docker & Compose', items: [{ autogenerate: { directory: 'docker' } }] },
      { label: '14 · Kubernetes (Helm)', items: [{ autogenerate: { directory: 'kubernetes' } }] },
      { label: '15 · Wrap-up', items: [{ autogenerate: { directory: 'wrap-up' } }] },
    ],
  }), preact()],
});
