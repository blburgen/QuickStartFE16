import type { Appointment } from "../../types"
import PlaneItem from "../PlaneItem"

type Props = {
    appointments: Array<Appointment>
}

export default function HomePage({appointments}:Props) {
    return(
        <>
            <div className="flex-grow-1 text-center border">
                Home Page
            </div>
            <div className="border border-primary rounded-4 p-2">
                <h2 className="text-center">Schedule Sorted By Order Of Entry</h2>
                {appointments.map(s => (
                    <PlaneItem 
                    key={s.id} 
                    appointment={s} 
                    />
                ))}
            </div>
        </>
    )
}