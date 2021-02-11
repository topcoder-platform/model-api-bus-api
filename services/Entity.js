const { v4: uuidv4 } = require('uuid')
const config = require('config')
const Joi = require('joi')
const { postBusEvent } = require('../helpers')
const logger = require('../helpers/logger')

/**
 * Create a new Entity
 * @param {Object} entity the entity data
 */
async function create (entity) {
  const newEntity = {
    id: uuidv4(),
    ...entity
  }
  try {
    // Posting the event to Kafka
    await postBusEvent(config.ENTITY_CREATE_TOPIC, newEntity)
  } catch (e) {
    logger.error('Failed to post event to Kafka')
    logger.logFullError(e)
    throw e
  }
  return newEntity
}

create.schema = {
  entity: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required()
  }).required()
}

module.exports = {
  create
}

logger.autoValidate(module.exports)
