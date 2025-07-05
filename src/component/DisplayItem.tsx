import type { Appointment } from "../types"

type Props = {
    appointment: Appointment,
    deleteAppointment: (id: string) => void,
    setIsModalOpen: (result: boolean) => void,
}

export default function DisplayItem ({appointment, deleteAppointment, setIsModalOpen}:Props){
    const handleShow = () => setIsModalOpen(true);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-12">
                    
                    {appointment.time}
                </div>
                <div className="col-md-10 col-12 mb-3">
                    {appointment.desc}
                    <button className="btn btn-outline-primary ms-3" onClick={handleShow}>update</button>
                    <button className="btn btn-outline-danger ms-3" onClick={() => deleteAppointment(appointment.id)}>X</button>
                </div>
            </div>
        </div>
    )
}