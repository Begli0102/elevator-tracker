import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../App.css'
import { ElevatorsProps } from '../interface'
import Main from '../components/MainComponent'

const HomePage = () => {
  const [elevators, setElevators] = useState([])
  const [openSidebarToggle, setOpenSidebarToggle] = useState<boolean>(false)
  const [operationalClicked, setOperationalClicked] = useState<boolean>(false)
  const [warningClicked, setWarningClicked] = useState<boolean>(false)
  const [outOfOrderClicked, setOutOfOrderClicked] = useState<boolean>(false)

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

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
      const response = await fetch('http://localhost:8080/api/elevators')
      const data = await response.json()
      console.log(data.elevators)
      setElevators(data.elevators)
    }
    fetchElevators()
  }, [])

  return (
    <div className='grid-container'>
      <NavBar openSidebar={openSidebar} />
      <SideBar
        openSidebarToggle={openSidebarToggle}
        openSidebar={openSidebar}
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
