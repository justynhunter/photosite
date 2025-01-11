FROM node:22-alpine

WORKDIR /usr/app

COPY . .
RUN corepack enable
RUN pnpm install --frozen-lockfile
RUN pnpm build

ENV NODE_ENV=production

CMD ["pnpm", "start"]
