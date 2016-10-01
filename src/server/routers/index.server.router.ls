path = require 'path'

module.exports = (app) ->
  app.get "/", (req, res) ->
    res.send-file path.join __dirname, "../../../index.html"