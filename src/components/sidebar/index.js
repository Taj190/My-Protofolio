import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Taj from '../../assets/images/taji-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Importing social media icons
import ToggleMode from '../Mode';
const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Taj} alt='logo' />
                <p className='sub-logo'>TAJINDER</p>
            </Link>
            <nav>
                <NavLink exact activeClassName="active" to="My-Protofolio/home">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink exact activeClassName="active" className='about-link' to="My-Protofolio/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact activeClassName="active" className="contact-link" to='My-Protofolio/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                  
                </NavLink>
                <ToggleMode/>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/tajinder-singh-064086264/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
           
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Taj190'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            
        </div>
    );
};

export default Sidebar;
