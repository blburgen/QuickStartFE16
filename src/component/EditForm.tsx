import { useState, type ChangeEvent, type MouseEvent } from "react";
import type { Appointment } from "../types";

type Props = {
    updateAppointment: (property: string, value: string, id?: number) => void,
    selectedAppointment?: Appointment,
    handleClose: () => void,
}

export default function EditForm({updateAppointment, selectedAppointment, handleClose}: Props){
    const [formValues, setFormValues] = useState({
        time: selectedAppointment?.time || "2025-06-01",
        desc: selectedAppointment?.desc || "",
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        updateAppointment("time", formValues.time, selectedAppointment?.id);
        updateAppointment("desc", formValues.desc, selectedAppointment?.id);

        handleClose();

    }

    return(
        <form>
            <div className="mb-2">
                <label htmlFor="time" className="form-label">Date:</label>
                    <input type="date" className="form-control" id="time"
                        name="time"
                        onChange={handleChange}
                        value={formValues.time}
                    />
            </div>
            <div className="mb-2">
                <label htmlFor="description">Event Information</label>
                <input className="mb-2 col-12" id="description"
                    name="desc"
                    onChange={handleChange}
                    value={formValues.desc}
                />
            </div>
            <div className="text-end">
                <button type="button" className="btn btn-secondary me-2" onClick={handleClose}>Cancel</button>
                <button className="btn btn-success" onClick={handleSubmit}>Save</button>
            </div>
        </form>
    )
}