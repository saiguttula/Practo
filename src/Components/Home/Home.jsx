import Form from '../Form/Form';
import './Home.css'

const Home = function () {
    return (
        <div className='home-container'>
            <h1 className='form-title'>Let's Find your Doctor</h1>
            <div className='form-container'>
                <Form />
        </div>
        <div className='details-container'>
            <div className='extra-details-container'>
                <img className='details-logo-img' src="https://i.postimg.cc/KcwjPqXK/pcs-logo-light-copy-2x.png" alt="logo-home" />
                <p className='details-para'>Choose the experts in end to end surgical care</p>
                <h1 className="details-head">You are in safe hands</h1>
                <button className='details-btn'>Know More</button>
            </div>
            <img className='details-doctors-img' src='https://i.postimg.cc/ZnMdp480/dweb-banner-copy-2x.png' alt="doctors-img"/>
        </div>
        </div>
    )
};

export default Home;