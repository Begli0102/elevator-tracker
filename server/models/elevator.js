const mongoose = require('mongoose')

// Define the Chart subdocument schema
const ChartSchema = new mongoose.Schema({
  name: { type: String, required: false }, // Optional
  data: [
    {
      time: { type: Date, required: false }, // Optional
      door_cycles_count: { type: Number, required: false }, // Optional
      door_openings_count: { type: Number, required: false }, // Optional
      door_closings_count: { type: Number, required: false }, // Optional
      door_closed_count: { type: Number, required: false }, // Optional
      door_opened_count: { type: Number, required: false } // Optional
    }
  ]
})

// Define the combined schema for all elevator types with optional fields
const ElevatorSchema = new mongoose.Schema({
  fabricationNumber: { type: String, required: true },
  address: { type: String, required: true },
  floorNumber: { type: Number, required: true },
  deviceIdentificationNumber: { type: String, required: true },
  manufacturerName: { type: String, required: true },
  productionYear: { type: Number, required: true },
  elevatorType: { type: String, required: true },
  state: { type: String, required: true },
  warningMessage: { type: String, required: false }, // Optional
  reason: { type: String, required: false }, // Optional
  chart: { type: ChartSchema, required: false } // Optional
})

// Compile the model
const Elevator = mongoose.model('Elevator', ElevatorSchema)
module.exports = Elevator
