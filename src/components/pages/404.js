import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>УХАДИ ЗДЭСЬ НЭТ НИКАГО</p>
            <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px' }} to='/'>ХАДЫ ЗДЭСЬ</Link>
        </div>
    )
}

export default Page404;