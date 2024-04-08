import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import '../App.css'
import Main from '../components/MainComponent'

const HomePage = () => {
  const [elevators, setElevators] = useState([])
  const [operationalClicked, setOperationalClicked] = useState<boolean>(false)
  const [warningClicked, setWarningClicked] = useState<boolean>(false)
  const [outOfOrderClicked, setOutOfOrderClicked] = useState<boolean>(false)

  const handleClickOperational = () => {
    setOperationalClicked(true)
    setWarningClicked(false)
    setOutOfOrderClicked(false)
  }
  const handleClickWarning = () => {
    setWarningClicked(true)
    setOperationalClicked(false)
    setOutOfOrderClicked(false)
  }
  const handleOutOfOrder = () => {
    setOutOfOrderClicked(true)
    setWarningClicked(false)
    setOperationalClicked(false)
  }

  useEffect(() => {
    const fetchElevators = async () => {
      const response = await fetch(
        'https://elevator-tracker-api.onrender.com/api/elevators'
      )
      const data = await response.json()
      console.log(data.elevators)
      setElevators(data.elevators)
    }
    fetchElevators()
  }, [])

  return (
    <div className='grid-container'>
      <SideBar
        elevators={elevators}
        handleClickOperational={handleClickOperational}
        handleClickWarning={handleClickWarning}
        handleOutOfOrder={handleOutOfOrder}
      />
      <Main
        elevators={elevators}
        operationalClicked={operationalClicked}
        warningClicked={warningClicked}
        outOfOrderClicked={outOfOrderClicked}
      />
    </div>
  )
}

export default HomePage
