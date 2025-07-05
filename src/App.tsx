import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import Navigation from "./component/Navigation"
import { useEffect, useState } from "react"
import type { Appointment } from "./types"
import EditSchedule from "./component/pages/EditSchedule"
import SortedSchedule from "./component/pages/SortedSchedule"
import PageNavBar from "./component/PageNavBar"
import { Route, Routes } from "react-router-dom"
import HomePage from "./component/pages/HomePage"
import ReverseSortedSchedule from "./component/pages/ReverseSortedSchedule"

// const TEST_APPOINTMENTS =[
//   {
//       id: 1,
//       time: "2025-06-01",
//       desc: "Go to doctors"

//   },
//   {
//       id: 2,
//       time: "2025-06-02",
//       desc: "Go to Bed"

//   },
//   {
//       id: 3,
//       time: "2025-06-02",
//       desc: "Get married"

//   },
// ]



export default function App() {
  const [ appointments, setAppointments ] = useState<Appointment[]>( [] )

  useEffect(() => {
      const asyncFunction = async () => {
      const response = await fetch("https://6867de11d5933161d70a1d6b.mockapi.io/api/v1/schedule")
      const data = await response.json()
      setAppointments(data)
    }
    asyncFunction()
  },[])

  const updateAppointment = async (newTime:string, newDesc:string, idToUpdate?: string) => {
    if(idToUpdate === undefined){
      return
    }

    const itemToEdit = appointments.find(currentAppointment => currentAppointment.id === idToUpdate)

    const edit = {...itemToEdit,["time"]:newTime,["desc"]:newDesc}

    const response = await fetch("https://6867de11d5933161d70a1d6b.mockapi.io/api/v1/schedule/" + idToUpdate, {
      method: "PUT",
      body: JSON.stringify(edit),
      headers: {
        "Content-Type": "application/json"
      },
    })

    const newlyEdit = await response.json()

    setAppointments(currentAppointment => currentAppointment.map(appointment => (
      appointment.id !== newlyEdit.id ? appointment: {
        ...appointment,
        ["time"]:newTime,
        ["desc"]:newDesc
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
        <Route path="/QuickStartFE16/" element={ 
          <div className="d-flex flex-column m-2">
            <HomePage
              appointments = {appointments}
            /> 
          </div>
        } />
        <Route path="/QuickStartFE16/EditSchedule/" element={ 
          <div className="d-flex flex-column m-2">
            <EditSchedule
              appointments = {appointments}
              setAppointments = {setAppointments}
              updateAppointment = {updateAppointment}
            />
          </div>
        } />
        <Route path="/QuickStartFE16/SortedSchedule" element={ 
          <div className="d-flex flex-column m-2">
            <SortedSchedule
              appointments = {appointments}
            />
          </div>  
        }/>
        <Route path="/QuickStartFE16/ReverseSortedSchedule" element={ 
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

