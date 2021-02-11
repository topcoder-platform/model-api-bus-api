# Bus API

Topcoder's architecture is event driven. Every service (that follows the v5 standards) emits an event into the Kafka stream, that is then picked up by processors down the chain. The [Bus API](https://github.com/topcoder-platform/tc-bus-api) allows interfacing with the Kakfa stream. Services make use of this api to send messages in Kafka.

To help work with the bus api, we have created a [wrapper module](https://github.com/topcoder-platform/tc-bus-api-wrapper) in Nodejs that every Nodejs based project in Topcoder makes use of. You do not have to use an additional http library - just use the wrapper, pass the relevant configurations and use the methods that it provides to interact with the bus api.

## Template

This folder contains the template for interacting with Bus API. You can go through it and understand how to integrate with bus api

### System requirements

- [NodeJS](https://nodejs.org/en/) - Version v14.15.4 was used during development
- [Postman](https://www.postman.com/) - for verification
- [Swagger Editor](https://editor.swagger.io/)

### Configuration

- All configurations can be found and set in `./config/default.js`

- The following parameters can be set in config files or in env variables:

- LOG_LEVEL: the log level, default is 'debug'
- API_VERSION: the API version, default is v5
- PORT: the server port, default is 2002
- AUTH0_URL: AUTH0 URL, used to get M2M token
- AUTH0_PROXY_SERVER_URL: AUTH0 proxy server URL, used to get M2M token
- AUTH0_AUDIENCE: AUTH0 audience, used to get M2M token
- TOKEN_CACHE_TIME: AUTH0 token cache time, used to get M2M token
- AUTH0_CLIENT_ID: AUTH0 client id, used to get M2M token
- AUTH0_CLIENT_SECRET: AUTH0 client secret, used to get M2M token
- BUSAPI_URL: Bus API URL
- KAFKA_ERROR_TOPIC: Kafka error topic used by bus API wrapper
- ENTITY_CREATE_TOPIC: The topic to be used for posting new events when you create a new entity
- EVENT_ORIGINATOR: The kafka event originator
- EVENT_MIME_TYPE: The kafka message MIME type


### How to post to the Kafka BUS API

- The `postBusEvent` method from `./helpers/index.js` can help posting messages to Kafka by simply providing the topic and the message payload.

### Local deployment

- Run `npm i` to install the dependencies
- Run `npm start` to start the API

### Heroku deployment

- You will need to install Heroku Toolbelt for this step if you don't already have it installed.

- In the main project folder, run the following commands:

```
  heroku login
  git init
  git add .
  git commit -m "init"
  heroku create
  git push heroku master
  heroku logs -t
  heroku open
```

- To set the configuration variables on Heroku, use the following syntax: 

```
  heroku config:set VARIABLE_NAME=value
```

### Swagger

- The Swagger definition is located in `./docs/swagger.yaml`

### Postman collection

- The Postman collection and environment are located in `./docs`
