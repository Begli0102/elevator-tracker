import { useState } from 'react'
import { ElevatorsProps } from '../interface'
import CardDetails from './CardDetails'

interface CardProps {
  elevator: ElevatorsProps
  operationalClicked: boolean
  warningClicked: boolean
  outOfOrderClicked: boolean
}

const Card = ({
  elevator,
  operationalClicked,
  warningClicked,
  outOfOrderClicked
}: CardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [
    selectedElevator,
    setSelectedElevator
  ] = useState<ElevatorsProps | null>(null)

  const getBackgroundColor = (state: string) => {
    switch (state) {
      case 'operational':
        return '#2e7d32'
      case 'warning':
        return '#ff6d00'
      case 'out-of-order':
        return '#d50000'
      default:
        return '#FFFFFF' // Default background color
    }
  }

  const openModal = (elevator: ElevatorsProps) => {
    setSelectedElevator(elevator)
    setIsOpen(true)
  }

  const closeModal = () => {
    setSelectedElevator(null)
    setIsOpen(false)
  }

  return (
    <>
      {(operationalClicked && elevator.state === 'operational') ||
      (warningClicked && elevator.state === 'warning') ||
      (outOfOrderClicked && elevator.state === 'out-of-order') ? (
        <div
          className='card'
          style={{ backgroundColor: getBackgroundColor(elevator.state) }}
          onClick={() => openModal(elevator)}
        >
          <div className='card-inner'>
            <h3>{elevator.fabricationNumber}</h3>
          </div>
          <div className='card-inner'>
            <h5>{elevator.state === 'out-of-order' && elevator.reason}</h5>
            <h5>{elevator.state === 'warning' && elevator.warningMessage}</h5>
            <h5>{elevator.state === 'operational' && 'operational'}</h5>
          </div>
        </div>
      ) : null}
      {isOpen && selectedElevator && (
        <CardDetails
          isOpen={isOpen}
          onClose={closeModal}
          elevator={selectedElevator}
        />
      )}
    </>
  )
}

export default Card

{
  /* {elevators.map((elevator, index) => (
        <div key={index}>
          {operationalClicked && elevator.state === 'operational' ? (
            <div className='card' style={{ backgroundColor: '#2e7d32' }}>
              <div className='card-inner'>
                <h3>{elevator.fabricationNumber}</h3>
              </div>
            </div>
          ) : null}
          {warningClicked && elevator.state === 'warning' ? (
            <div className='card' style={{ backgroundColor: '#ff6d00' }}>
              <div className='card-inner'>
                <h3>{elevator.fabricationNumber}</h3>
              </div>
            </div>
          ) : null}
          {outOfOrderClicked && elevator.state === 'out-of-order' ? (
            <div className='card' style={{ backgroundColor: '#d50000' }}>
              <div className='card-inner'>
                <h3>{elevator.fabricationNumber}</h3>
              </div>
            </div>
          ) : null}
        </div>
      ))} */
}
