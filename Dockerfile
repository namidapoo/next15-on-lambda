FROM public.ecr.aws/docker/library/node:22-slim

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 /lambda-adapter /opt/extensions/lambda-adapter
ENV PORT=3000
WORKDIR "/var/task"

ADD ./.next/standalone/ /var/task

CMD ["node", "server.js"]
