import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="This is page not found"
                />
                <title>This is page not found</title>
            </Helmet>
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>УХАДИ ЗДЭСЬ НЭТ НИКАГО</p>
            <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px' }} to='/'>ХАДЫ ЗДЭСЬ</Link>
        </div>
    )
}

export default Page404;