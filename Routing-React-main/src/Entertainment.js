import {Link} from 'react-router-dom';

import './entertainment.css';
function Entertainment(){
    return(
        <div className='entertainment-container'>
            <h1>Hello, This is Entertainment page!</h1>
            <br></br>
            <br></br>
            <Link to="/">
            <button>Back</button>
            </Link>
        </div>
    )
}
export default Entertainment;