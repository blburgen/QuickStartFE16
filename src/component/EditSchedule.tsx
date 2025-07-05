import Sidebar from "./Sidebar"
import ItemList from "./ItemList"
import type { Appointment } from "../types"

type Props = {
    appointments: Array<Appointment>,
    setAppointments: (item : Array<Appointment>) => void,
}

export default function EditSchedule({appointments, setAppointments}:Props) {

  const deleteAppointment = (idToDelete:number) => {
    setAppointments( appointments.filter(s=>s.id !== idToDelete))
  }

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

  const addAppointment = (time: string, desc: string) => {
    const newAppointment = {
            id: appointments.length ? appointments[appointments.length - 1].id + 1 : 0,
            time: time,
            desc: desc,
        }  

    setAppointments([...appointments, newAppointment])
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