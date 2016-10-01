express = require "./config/express"
require! "./config/mongoose"
require! path

app = express!
db = mongoose!

app.listen "8080", !->
  console.log "express server listening on 8080"
  console.log("rerun")
  console.log "hello"