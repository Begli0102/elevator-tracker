const Elevator = require('../models/elevator')

//GET ALL ELEVATORS
const getAllElevators = async (req, res) => {
  try {
    const elevators = await Elevator.find({})
    res.status(200).json({ count: elevators.length, elevators })
  } catch (error) {
    console.error('Error retrieving elevators:', error.message)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

//GET ONE ELEVATOR BY ID
const getOneElevator = async (req, res) => {
  const { id } = req.params
  try {
    const elevator = await Elevator.findById(id)
    if (!elevator) {
      return res.status(404).json({ message: 'Elevator not found' })
    }
    res.status(200).json(elevator)
  } catch (error) {
    console.error('Error retrieving elevator by ID:', error.message)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = {
  getAllElevators,
  getOneElevator
}
