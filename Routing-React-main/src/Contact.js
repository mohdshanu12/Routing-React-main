import {Link} from 'react-router-dom';

import './contact.css';
function Contact(){
    return(
        <div className='contact-container'>
            <h1>Hello, This is contact page!</h1>
            <br></br>
            <br></br>
            <Link to="/">
            <button>Back</button>
            </Link>
            
        </div>
    )
}
export default Contact;