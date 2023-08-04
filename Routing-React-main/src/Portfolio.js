import {Link} from 'react-router-dom';

import './portfolio.css';
function Portfolio(){
    return(
        <div className='portfolio-container'>
            <h1>Hello, This is portfolio page!</h1>
            <br></br>
            <br></br>
            <Link to="/">
            <button>Back</button>
            </Link>
        </div>
    )
}
export default Portfolio;