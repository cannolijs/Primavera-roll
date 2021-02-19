############################
# Final container
############################
FROM registry.cto.ai/official_images/node:2-12.13.1-stretch-slim

WORKDIR /ops

RUN npm i fastify
RUN npm i fastify-autoload
RUN npm i fastify-cli
ADD index.js index.js

RUN chown -R ops /ops
