import './Navbar.css'

const Navbar = function () {
    return (
        <nav className="navbar-container">
            <img className="logo" src="https://www.practo.com/nav/9.5.12/consumer/images/practo.svg" alt="logo-new"/>
            <div className="departments">
                <h4 className="dept">Find Doctors</h4>
                <h4 className="dept">Video Consult</h4>
                <h4 className="dept">Medicines</h4>
                <h4 className="dept">Lab Tests</h4>
                <h4 className="dept">Surgeries</h4>
            </div>
            <div className="additional-options">
                <p className="opt">For Corporates</p>
                <p className="opt">For Providers</p>
                <p className="opt">Security & help</p>
                <button className="login-button">Login / Signup</button>
            </div>
        </nav>
    )
}

export default Navbar