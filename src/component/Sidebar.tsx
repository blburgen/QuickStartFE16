import { useState } from "react"
import NewForm from "./NewForm";

type Props = {
    addAppointment: (time:string, desc:string) => void,
}

export default function Sidebar({addAppointment}:Props) {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <>
            {isExpanded ? (
                <NewForm
                    addAppointment={addAppointment}
                />     
            ) : null}
            <button className="btn btn-light p-1 border" onClick={handleButtonClick}>{ isExpanded ? "<" : ">"}</button>    
        </>
        
    )
}