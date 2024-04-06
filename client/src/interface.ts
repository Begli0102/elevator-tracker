interface ChartsProps {
  name: string
  data: [
    {
      time: Date
      door_openings_count: number
      door_cycles_count: number
      door_closings_count: number
      door_closed_count: number
      door_opened_count: number
    }
  ]
}

export interface ElevatorsProps {
  fabricationNumber: string
  address: string
  floorNumber: number
  deviceIdentificationNumber: string
  manufacturerName: string
  productionYear: number
  elevatorType: string
  state: string
  warningMessage?: string
  reason?: string
  chart?: ChartsProps
}
