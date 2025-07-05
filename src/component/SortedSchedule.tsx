import type { Appointment } from "../types"
import PlaneItem from "./PlaneItem"

type Props = {
    appointments: Array<Appointment>
}

export default function SortedSchedule({appointments}:Props) {
    let sortedAppointments = appointments.slice().sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
    
    return (  
        <div className="border border-primary rounded-4 p-2">
            <h2 className="text-center">Sorted Schedule</h2>
            {sortedAppointments.map(s => (
                <PlaneItem 
                    key={s.id} 
                    appointment={s} 
                />
            ))}
        </div>
    )
}