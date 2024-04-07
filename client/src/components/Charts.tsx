import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { ElevatorsProps } from '../interface'

interface ChartProps {
  elevator: ElevatorsProps
}

const Charts = ({ elevator }: ChartProps) => {
  return (
    <>
      <BarChart width={500} height={300} data={elevator.chart?.data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='door_cycles_count' fill='#8884d8' name='Door Cycles' />
        <Bar
          dataKey='door_openings_count'
          fill='#82ca9d'
          name='Door Openings'
        />
        <Bar
          dataKey='door_closings_count'
          fill='#ffc658'
          name='Door Closings'
        />
      </BarChart>
    </>
  )
}

export default Charts
