import { Link } from 'react-router-dom';
import './Form.css'

const Form = function () {
    return (
        <form className='form'>
                <div className='location-container'>
                    <h4 className='where'>Where</h4>
                    <select className='select1'>
                        <option className='option'>Location</option>
                        <option className='select1-option'>Mumbai</option>
                        <option className='select1-option'>Hyderabad</option>
                        <option className='select1-option'>Delhi</option>
                        <option className='select1-option'>Pune</option>
                        <option className='select1-option'>Vishakapatnam</option>
                        <option className='select1-option'>Chennai</option>
                        <option className='select1-option'>Banglore</option>
                        <option className='select1-option'>Kochi</option>
                        <option className='select1-option'>Warangal</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                </div>
                <div className='search-container'>
                    <h4 className='search-for'>Search For</h4>
                    <select className='select2'>
                        <option className='select2-option'>Doctors, Clinics, Hospitals</option>
                        <option>Dentist</option>
                        <option>Gynecologist</option>
                        <option>General Doctor</option>
                        <option>Dermatologist</option>
                        <option>E.N.T Specialist</option>
                        <option>Homoeopathy</option>
                        <option>Ayurveda</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
                <Link to='/doctors'><input type='submit' className='find' value='Search'/></Link>
            </form>
    )
};

export default Form;