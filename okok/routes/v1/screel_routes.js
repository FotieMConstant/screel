const express = require('express')

const router = express.Router()

const screel_Controller = require('../../controllers/v1/screel_controller')

router.post("/v1/gh_access_token/", screel_Controller.getAccess_token);







module.exports = router;