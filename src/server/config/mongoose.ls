require! "./config"
require! "mongoose"

module.exports = ->
  mongoose.Promise = require "bluebird"
  db = mongoose.connect config.db

  mongoose.set("debug", true)

  mongoose.connection.on "open", !->
    console.log "connect"

  mongoose.connection.on "error", (error) !->
    console.log "something wrong happen" + error

  db
