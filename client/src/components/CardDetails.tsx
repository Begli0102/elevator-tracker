import { ElevatorsProps } from '../interface'
import Charts from './Charts'

interface CardDetailsProps {
  isOpen: boolean
  onClose: () => void
  elevator: ElevatorsProps
}
const CardDetails = ({ isOpen, onClose, elevator }: CardDetailsProps) => {
  if (!isOpen) return null

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='modal-close-btn' onClick={onClose}>
          X
        </button>
        <div className='card-details'>
          <div className='card-details-item'>
            <h4>Adress: {elevator.address}</h4>
            <h4>
              Identification number: {elevator.deviceIdentificationNumber}
            </h4>
            <h4>Type: {elevator.elevatorType}</h4>
            <h4>Floor: {elevator.floorNumber}</h4>
            <h4>Manufacturer: {elevator.manufacturerName}</h4>
            <h4>Production year: {elevator.productionYear}</h4>
            <h4>The status of elevator is {elevator.state}</h4>
          </div>
          <div className='charts'>
            {elevator.state === 'operational' && <Charts elevator={elevator} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
