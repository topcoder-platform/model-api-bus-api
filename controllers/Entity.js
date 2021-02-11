const service = require('../services/Entity')

/**
 * Create
 * @param {Object} req the request object
 * @param {Object} res the response object
 */
async function create (req, res) {
  res.json(await service.create(req.body))
}

module.exports = {
  create
}
