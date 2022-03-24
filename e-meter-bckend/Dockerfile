FROM node:16-slim AS base
ENV CI=true
ARG PNPM_VERSION=6.32.3
RUN npm --global install pnpm@${PNPM_VERSION}
WORKDIR /usr/src/app

FROM base AS dev
COPY ./package.json ./
COPY ./pnpm-lock.yaml ./

COPY . .
RUN pnpm install

WORKDIR /usr/src/app/server
EXPOSE 8080 
ENV NODE_ENV=dev

ENTRYPOINT ["pnpm ", "run ","start"]


