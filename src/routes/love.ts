const express = require('express')
const router = express.Router()

const loveController = require('.././controllers/compatibilityChecker')

router.route('/:mName/:mZodiac/:pName/:pZodiac')
    .get(loveController.checkZodiacCompatibility)



module.exports = router