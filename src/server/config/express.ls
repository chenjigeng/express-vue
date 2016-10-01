require! express
require! path
require! "method-override"
require! "cookie-parser"
require! "express-session": session
require! "body-parser"

module.exports = ->
  app = express!
  set-express-router app
  set-express-middleware app
  app

set-express-router = (app) !->
  # regist app router
  require("../routers/index.server.router") app

set-express-middleware = (app) !->

  app.use cookie-parser!
  app.use session {secret:  "This is vue test"}

  app.use body-parser.urlencoded({ extended: true })
  app.use body-parser.json!
  app.use method-override!
  app.use express.static path.join __dirname, '../../../'
  app.use express.static path.join __dirname, '../../'