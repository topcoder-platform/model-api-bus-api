const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')
const _ = require('lodash')
const { wrapRoute } = require('./helpers')
const { errorHandler } = require('./helpers/middlewares')
const routes = require('./routes')

const app = express()

// Add required middlewares
app.use(bodyParser.json())
app.use(cors())

// load routes
_.each(routes, (route, routeDef) => {
  _.each(route, (def, verb) => {
    const actions = []

    actions.push(wrapRoute(def.method))
    app[verb](`/${config.API_VERSION}${routeDef}`, actions)
  })
})

app.use(errorHandler)

// Start the API
app.listen(config.PORT, () => console.log(`API is running on port ${config.PORT}`))
