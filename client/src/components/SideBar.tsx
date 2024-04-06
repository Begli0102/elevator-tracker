import { BiErrorCircle } from 'react-icons/bi'
import { IoMdWarning } from 'react-icons/io'
import { FaCheckCircle } from 'react-icons/fa'
import { ElevatorsProps } from '../interface'
import { RiDashboardFill } from 'react-icons/ri'

interface SideBarProps {
  openSidebarToggle: boolean
  openSidebar: () => void
  elevators: ElevatorsProps[]
  handleClickOperational: () => void
  handleClickWarning: () => void
  handleOutOfOrder: () => void
}

// Define the props for the component, expecting an array of strings
interface Props {
  states: string[]
}

const SideBar = ({
  openSidebarToggle,
  openSidebar,
  elevators,
  handleClickOperational,
  handleClickWarning,
  handleOutOfOrder
}: SideBarProps) => {
  const singleElevatorState: string[] = elevators.map(elevator => {
    return elevator.state
  })
  const stateCounts: { [key: string]: number } = {}

  singleElevatorState.forEach(state => {
    stateCounts[state] = (stateCounts[state] || 0) + 1
  })

  const renderStates = () => {
    return (
      <>
        {Object.entries(stateCounts).map(([state, count], index) => (
          <div key={index}>
            <ul className='sidebar-list'>
              {state === 'operational' && (
                <li
                  className='sidebar-list-item'
                  onClick={handleClickOperational}
                >
                  <FaCheckCircle
                    className='icon'
                    style={{ color: '#2e7d32' }}
                  />
                  Operational
                  <span style={{ color: '#2e7d32' }}>{count}</span>
                </li>
              )}
              {state === 'warning' && (
                <li className='sidebar-list-item' onClick={handleClickWarning}>
                  <IoMdWarning className='icon' style={{ color: '#ff6d00' }} />
                  Warning
                  <span style={{ color: '#ff6d00' }}>{count}</span>
                </li>
              )}
              {state === 'out-of-order' && (
                <li className='sidebar-list-item' onClick={handleOutOfOrder}>
                  <BiErrorCircle
                    className='icon'
                    style={{ color: '#d50000' }}
                  />
                  Out of order
                  <span style={{ color: '#d50000' }}>{count}</span>
                </li>
              )}
            </ul>
          </div>
        ))}
      </>
    )
  }

  return (
    <aside
      id='sidebar'
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <RiDashboardFill className='icon_header' /> DASHBOARD
        </div>
        <span className='icon close_icon' onClick={openSidebar}>
          X
        </span>
      </div>
      {renderStates()}
    </aside>
  )
}

export default SideBar
{
  /* <li className='sidebar-list-item' onClick={handleClickOperational}>
              <FaCheckCircle className='icon' style={{ color: '#2e7d32' }} />
              Operational
              <span style={{ color: '#2e7d32' }}>{count}</span>
            </li>
            <li className='sidebar-list-item' onClick={handleClickWarning}>
              <IoMdWarning className='icon' style={{ color: '#ff6d00' }} />
              Warning
              <span style={{ color: '#ff6d00' }}>{count}</span>
            </li>
            <li className='sidebar-list-item' onClick={handleOutOfOrder}>
              <BiErrorCircle className='icon' style={{ color: '#d50000' }} />{' '}
              Out of order
              <span style={{ color: '#d50000' }}>{count}</span>
            </li> */
}
