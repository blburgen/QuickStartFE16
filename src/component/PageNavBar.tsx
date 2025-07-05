import { Link } from "react-router-dom";

export default function PageNavBar() {
    return (
        <div className="d-flex flex-grow-1 mb-2">
            <Link to="/" className="flex-grow-1 m-2">
                <button className="w-100 rounded">Home</button>
            </Link>
            <Link to="/EditSchedule/" className="flex-grow-1 m-2">
                <button className="w-100 rounded">Edit Appointments</button>
            </Link>
            <Link to="/SortedSchedule" className="flex-grow-1 m-2">
                <button className="w-100 rounded">Sort Appointments</button>
            </Link>
            <Link to="/ReverseSortedSchedule" className="flex-grow-1 m-2">
                <button className="w-100 rounded">Reverse Sort Appointments</button>
            </Link>
        </div>
    )
}
