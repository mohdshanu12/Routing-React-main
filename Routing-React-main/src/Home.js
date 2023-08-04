import {Link} from 'react-router-dom';

import './home.css';
function Home(){
    return(
        <div className="home-container">
            <h1>Hello, This is home page!</h1>
            <br></br>
            <br></br>
            <Link to="/">
            <button>Back</button>
            </Link>
        </div>
    )
}
export default Home;