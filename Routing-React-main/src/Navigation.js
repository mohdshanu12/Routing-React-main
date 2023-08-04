import {Link} from 'react-router-dom';
import './navigation.css';


function Navigation(){
    return(
      <div>
      <h1 className='heading'>This is a routing demo by Shanu's Team!</h1>
        <div className='container'>

    <Link to='/home'>
      <button className='home-button btn'>Home</button>
      </Link>

      <Link to='/about'><button className='about-button btn'>About</button></Link>
      
      <Link to='/contact'>
      <button className='btn contact-button'>Contact</button>
      </Link>

      
      <Link to='/portfolio'>
      <button className='btn portfolio-button'>Portfolio</button>
      </Link>
      
      <Link to='/entertainment'>
      <button className='btn entertainment-button'>Entertainment</button>
      </Link>
      </div>
      </div>
    )
}

export default Navigation;