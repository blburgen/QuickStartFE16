import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import Navigation from "./component/Navigation"
import { useState } from "react"
import type { Appointment } from "./types"
import EditSchedule from "./component/EditSchedule"
import SortedSchedule from "./component/SortedSchedule"

const TEST_APPOINTMENTS =[
  {
      id: 1,
      time: "2025-06-01",
      desc: "Go to doctors"

  },
  {
      id: 2,
      time: "2025-06-02",
      desc: "Go to Bed"

  },
  {
      id: 3,
      time: "2025-06-02",
      desc: "Get married"

  },
]

export default function App() {
  const [ appointments, setAppointments ] = useState<Appointment[]>(TEST_APPOINTMENTS)
  
  return (
    <>
      <Navigation />
      <h1 className="text-center">Quick Start Front End Weeks 14-16 Assignment</h1>
      <h1 className="text-center">Appointment App</h1>
      <div className="d-flex flex-column">
        <EditSchedule
          appointments = {appointments}
          setAppointments = {setAppointments}
        />
      </div>
      <div className="d-flex flex-column">
        <SortedSchedule
          appointments = {appointments}
        />
      </div>   
    </>
  )
}

