# ShopMicro — Real-World Project Guide

A bilingual (English / ไทย) step-by-step guide that teaches you to build **ShopMicro**, an event-driven e-commerce microservices system — five Go services behind a gRPC gateway, an outbox-driven order saga over Kafka and RabbitMQ, a resilience layer, and a Helm-packaged Kubernetes deploy.

It is project **#3** of the Learn Hub [Real-World Projects](https://projects.avetavos.com/taskflow/en/introduction/roadmap/) series — each project rebuilds a real application while adapting a different slice of the Learn Hub courses.

**Live:** https://projects.avetavos.com/shopmicro/en/

## What you build

| Layer | Tech |
|-------|------|
| Services | Go 1.27 · gRPC + protobuf (buf) · grpc-gateway (HTTP/JSON) |
| Data | PostgreSQL 18 · golang-migrate · transactional outbox |
| Messaging | Kafka 4 (KRaft) for the order saga · RabbitMQ 4 for notifications |
| Resilience | timeouts, retries with jitter, circuit breaker, idempotent consumers |
| Runtime | Docker Compose (distroless images) · Kubernetes with a Helm chart |

Features: catalog, order, payment, notification and gateway services; a place-order saga that confirms or cancels via Kafka events; dead-lettering and retries on RabbitMQ; unit tests, testcontainers integration tests, and a real end-to-end saga run.

## The guide itself

This repo is an [Astro Starlight](https://starlight.astro.build/) site. The lessons live in `src/content/docs/en/**` and `src/content/docs/th/**`, grouped into 16 modules (catalog-service → docker → gateway → introduction → kafka → kubernetes → notification-service → order-service → payment-service → proto-grpc → rabbitmq → resilience → saga → setup → testing → wrap-up). Each lesson follows the same shape: *what we're building → why → pros & cons → build it → verify → recap*, with full copy-pasteable code. Every code block is byte-identical between the two languages (`npm run check` enforces it), and the project has been assembled from the lessons and built/run end to end as part of review.

## Run the guide locally

```bash
npm install
npm run dev      # http://localhost:4321/shopmicro/
npm run build    # static build to dist/
npm run check    # EN/TH parity check
```

## Deployment

Static site (`output: 'static'`, `base: '/shopmicro'`) served by its own Cloudflare Worker at `projects.avetavos.com/shopmicro/*`. `npm run deploy` builds, stages `dist/` under `.cf-assets/shopmicro/` and runs `wrangler deploy`; the whole series can be redeployed with `learn-hub/tools/deploy-realworld.sh`.
