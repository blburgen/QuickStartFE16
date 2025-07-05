import type { Appointment } from "../types";
import Item from "./Item";

type Props = {
    appointments: Array<Appointment>,
    deleteAppointment: (id: number) => void
    updateAppointment: (property: string, value: string, id?: number) => void,
}

export default function ItemList({appointments, deleteAppointment, updateAppointment}: Props) {
    return (
        <div className="border border-primary rounded-4 p-2">
            <h2 className="text-center">Edit Schedule</h2>
            {appointments.map(s => (
                <Item 
                    key={s.id} 
                    appointment={s} 
                    deleteAppointment={deleteAppointment}
                    updateAppointment={updateAppointment}
                />
            ))}
        </div>
    )
}