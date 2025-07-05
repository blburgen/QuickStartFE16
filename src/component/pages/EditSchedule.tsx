import Sidebar from "../Sidebar"
import ItemList from "../ItemList"
import type { Appointment } from "../../types"

type Props = {
    appointments: Array<Appointment>,
    setAppointments: (item : Array<Appointment>) => void,
    updateAppointment: (newTime: string, newDesc: string, id?: string) => void,
}

export default function EditSchedule({appointments, setAppointments, updateAppointment}:Props) {

  const deleteAppointment = async (idToDelete:string) => {
    const response = await fetch("https://6867de11d5933161d70a1d6b.mockapi.io/api/v1/schedule/" + idToDelete, {
      method: "DELETE"
    })

    const newlyDeletedItem = await response.json()
    setAppointments( appointments.filter(s=>s.id !== newlyDeletedItem.id))
  }

  const addAppointment = async (time: string, desc: string) => {
    const newAppointment = {
            id: appointments.length ? (Number(appointments[appointments.length - 1].id) + 1).toString() : "0",
            time: time,
            desc: desc,
        }
    
    const response = await fetch("https://6867de11d5933161d70a1d6b.mockapi.io/api/v1/schedule", {
      method: "POST",
      body: JSON.stringify(newAppointment),
      headers: {
        "Content-Type": "application/json"
      },
    })

    const newlyCreatedItem = await response.json()

    setAppointments([...appointments, newlyCreatedItem])
  }
  
  return (
    <div className="d-flex flex-grow-1">
        <Sidebar 
        addAppointment = {addAppointment}
        />
        <div className="flex-grow-1">
        <ItemList
            appointments={appointments}
            deleteAppointment={deleteAppointment}
            updateAppointment={updateAppointment}
        />
        </div>
    </div>
  )
}