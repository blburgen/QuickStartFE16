import type { Appointment } from "../types";

type Props = {
    appointment: Appointment,
}

export default function PlaneItem({appointment}: Props){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-12">   
                        {appointment.time}
                    </div>
                    <div className="col-md-10 col-12 mb-3">
                        {appointment.desc}
                    </div>
                </div>
            </div>
        </>
        
    )
}