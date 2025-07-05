import { useState, type ChangeEvent, type MouseEvent } from "react"

type Props = {
    addAppointment: (time:string, desc:string) => void,
}

export default function NewForm({addAppointment}:Props){
    const [formValues, setFormValues] = useState({
        time: "2025-07-01",
        desc: "",
    })

    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        addAppointment(formValues.time,formValues.desc ? formValues.desc:"Default Appointment -- It is a secret")
        setFormValues({
            time: "2025-07-01",
            desc: "",
        })
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })


    return(
        <form>
            <div className="border border-primary rounded-4 p-2">
                <h2>New Event:</h2>
                <div>
                    <label htmlFor="time" className="form-label">Date:</label>
                    <input type="date" className="form-control" id="time"
                        name="time"
                        onChange={handleChange}
                        value={formValues.time}
                    />
                </div>
                <div>
                    <label htmlFor="description">Event Information</label>
                    <input className="mb-2 col-12" id="description"
                        name="desc"
                        onChange={handleChange}
                        value={formValues.desc}
                    />
                </div>
                <button className="btn btn-light p-1 border center" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}