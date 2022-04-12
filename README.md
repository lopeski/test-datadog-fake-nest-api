# Datadog APM 101

## Introdução

Neste repositório encontram-se os recursos pré-configurados utilizados para que seja possível realizar o levantamento de um ambiente com monitorado pelo Datadog.

Ele consiste em:

- Um backend/API utilizando NestJS
- Um Datadog Agent

## Configuração e execução

Instale as dependências do projeto utilizando o comando `npm install`.
Após isso, crie o arquivo `.env` com base no arquivo `.env.example`, inserindo sua chave da API do datadog.

Com o ambiente configurado, realize o processo de build do projeto com `npm run build`, suba o ambiente dockerizado com `docker-compose up`.

A partir deste ponto será possível realizar requisições `POST` e `GET` no endpoint '/' e as métricas geradas pela aplicação serão coletadas pelo Agent do Datadog e disponibilizadas para visualização e análise na interface web.
