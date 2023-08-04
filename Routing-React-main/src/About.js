import {Link} from 'react-router-dom';

import './about.css';
function About(){
    return(
        <div className='about-container'>
            <h1>Hello, This is about page!</h1>
            <br></br>
            <br></br>
            <Link to="/">
            <button>Back</button>
            </Link>
        </div>
    )
}
export default About;