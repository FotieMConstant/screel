const express = require('express')

const router = express.Router()

const devaround_Controller = require('.../v1/controllers/devaround_controller')

router.get("/v1/gh_access_token/:code", devaround_Controller.getAccess_token);







module.exports = router;