import { ElevatorsProps } from '../interface'
import Card from './Cards'

interface MainProps {
  elevators: ElevatorsProps[]
  operationalClicked: boolean
  warningClicked: boolean
  outOfOrderClicked: boolean
}

const Main = ({
  elevators,
  operationalClicked,
  warningClicked,
  outOfOrderClicked
}: MainProps) => {
  return (
    <main className='main-container'>
      <div className='main-cards'>
        {elevators.map((elevator: ElevatorsProps) => (
          <Card
            elevator={elevator}
            operationalClicked={operationalClicked}
            warningClicked={warningClicked}
            outOfOrderClicked={outOfOrderClicked}
          />
        ))}
      </div>
    </main>
  )
}

export default Main
