const entityController = require('./controllers/Entity')
const healthController = require('./controllers/Health')

module.exports = {
  '/health': {
    get: {
      method: healthController.check
    }
  },
  '/entities': {
    post: {
      method: entityController.create
    }
  }
}
