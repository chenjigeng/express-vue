express = require "./config/express"
require! "./config/mongoose"
require! path

app = express!
# if you want to use mongoDB, cancel it
# db = mongoose! 

app.listen "8080", !->
  console.log "express server listening on 8080"