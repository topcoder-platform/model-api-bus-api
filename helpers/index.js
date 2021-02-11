const co = require('co')
const config = require('config')
const busApi = require('topcoder-bus-api-wrapper')
const _ = require('lodash')

// Bus API Client
let busApiClient

/**
 * Runs a function using the co model so we can use
 * async/await syntax
 * @param {Function} fn The controller function
 */
function wrapRoute (fn) {
  return (req, res, next) => {
    co(fn(req, res, next)).catch(next)
  }
}

/**
 * Get Bus API Client
 * @return {Object} Bus API Client Instance
 */
function getBusApiClient () {
  // if there is no bus API client instance, then create a new instance
  if (!busApiClient) {
    busApiClient = busApi(_.pick(config,
      ['AUTH0_URL', 'AUTH0_AUDIENCE', 'TOKEN_CACHE_TIME',
        'AUTH0_CLIENT_ID', 'AUTH0_CLIENT_SECRET', 'BUSAPI_URL',
        'KAFKA_ERROR_TOPIC', 'AUTH0_PROXY_SERVER_URL']))
  }

  return busApiClient
}

/**
 * Post bus event.
 * @param {String} topic the event topic
 * @param {Object} payload the event payload
 */
async function postBusEvent (topic, payload) {
  const client = getBusApiClient()
  await client.postEvent({
    topic,
    originator: config.EVENT_ORIGINATOR,
    timestamp: new Date().toISOString(),
    'mime-type': config.EVENT_MIME_TYPE,
    payload
  })
}

module.exports = {
  wrapRoute,
  postBusEvent
}
