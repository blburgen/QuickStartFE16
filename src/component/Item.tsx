import { useState } from "react";
import type { Appointment } from "../types";
import { Modal } from "react-bootstrap";
import EditForm from "./EditForm";
import DisplayItem from "./DisplayItem";

type Props = {
    appointment: Appointment,
    deleteAppointment: (id: string) => void,
    updateAppointment: (newTime: string, newDesc: string, id?: string) => void,
}

export default function Item({appointment, deleteAppointment, updateAppointment}: Props){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClose = () =>setIsModalOpen(false);
    

    return(
        <>
            <DisplayItem
                appointment = {appointment}
                deleteAppointment={deleteAppointment}
                setIsModalOpen = {setIsModalOpen}
            />
            
            <Modal show={isModalOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm
                        updateAppointment={updateAppointment}
                        handleClose={handleClose}
                        selectedAppointment={appointment}
                    />
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
        
    )
}