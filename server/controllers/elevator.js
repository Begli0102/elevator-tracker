const Elevator = require('../models/elevator')

//GET ALL ELEVATORS
const getAllElevators = async (req, res) => {
  try {
    const elevators = await Elevator.find({})
    res.status(200).json({
      count: elevators.length,
      elevators
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

//GET ONE ELEVATOR BY ID
const getOneElevator = async (req, res) => {
  const { id } = req.params
  try {
    const elevator = await Elevator.findById(id)

    res.status(200).json(elevator)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllElevators,
  getOneElevator
}
