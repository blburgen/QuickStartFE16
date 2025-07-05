import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import Navigation from "./component/Navigation"
import { useState } from "react"
import type { Appointment } from "./types"
import EditSchedule from "./component/pages/EditSchedule"
import SortedSchedule from "./component/pages/SortedSchedule"
import PageNavBar from "./component/PageNavBar"
import { Route, Routes } from "react-router-dom"
import HomePage from "./component/pages/HomePage"
import ReverseSortedSchedule from "./component/pages/ReverseSortedSchedule"

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

  const updateAppointment = (property:string, newValue:string, idToUpdate?: number) => {
    if(idToUpdate === undefined){
      return
    }

    setAppointments(currentAppointment => currentAppointment.map(appointment => (
      appointment.id !== idToUpdate ? appointment: {
        ...appointment,
        [property]:newValue
      }
    )))
  }
  
  return (
    <>
      <Navigation />
      <h1 className="text-center">Quick Start Front End Weeks 14-16 Assignment</h1>
      <h1 className="text-center">Appointment App</h1>
      <div className="d-flex flex-column">
        <PageNavBar/>
      </div>
      <Routes>
        <Route path="/" element={ 
          <div className="d-flex flex-column m-2">
            <HomePage
              appointments = {appointments}
            /> 
          </div>
        } />
        <Route path="/EditSchedule/" element={ 
          <div className="d-flex flex-column m-2">
            <EditSchedule
              appointments = {appointments}
              setAppointments = {setAppointments}
              updateAppointment = {updateAppointment}
            />
          </div>
        } />
        <Route path="/SortedSchedule" element={ 
          <div className="d-flex flex-column m-2">
            <SortedSchedule
              appointments = {appointments}
            />
          </div>  
        }/>
        <Route path="/ReverseSortedSchedule" element={ 
          <div className="d-flex flex-column m-2">
            <ReverseSortedSchedule
              appointments = {appointments}
            />
          </div>  
        }/>
      </Routes>
    </>
  )
}

