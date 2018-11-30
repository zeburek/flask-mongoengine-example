FROM node:current-alpine as builder

WORKDIR /react

COPY ./react-app/ ./

RUN yarn && yarn build

FROM python:3-alpine

WORKDIR /app

COPY --from=builder /react/build/ /app/build/
COPY requirements.txt ./
COPY app.py ./
COPY utils ./utils
COPY routes ./routes
COPY models ./models
COPY entrypoint.sh /

RUN pip install -r requirements.txt && \
    chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
