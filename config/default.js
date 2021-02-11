module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  API_VERSION: process.env.API_VERSION || 'v5/model-api/bus-api',
  PORT: process.env.PORT || 2001,

  // used to get M2M token
  AUTH0_URL: process.env.AUTH0_URL,
  AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL,
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
  TOKEN_CACHE_TIME: process.env.TOKEN_CACHE_TIME,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,

  // bus API config params
  BUSAPI_URL: process.env.BUSAPI_URL || 'https://api.topcoder-dev.com/v5',
  KAFKA_ERROR_TOPIC: process.env.KAFKA_ERROR_TOPIC || 'common.error.reporting',
  ENTITY_CREATE_TOPIC: process.env.ENTITY_CREATE_TOPIC || 'test.new.bus.events',
  EVENT_ORIGINATOR: process.env.EVENT_ORIGINATOR || 'model-api-bus-api',
  EVENT_MIME_TYPE: process.env.EVENT_MIME_TYPE || 'application/json'
}