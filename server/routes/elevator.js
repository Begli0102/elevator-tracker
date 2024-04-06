const express = require('express')
const router = express.Router()
const { getAllElevators, getOneElevator } = require('../controllers/elevator')

//GET ALL ELEVATORS
router.get('/', getAllElevators)

//GET ELEVATOR
router.get('/:id', getOneElevator)

module.exports = router
