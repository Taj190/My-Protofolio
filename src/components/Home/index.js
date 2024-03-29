import Taj from '../../assets/images/taji.jpeg';
import { Link } from 'react-router-dom';
import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetter';
import { useEffect, useState } from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'j', 'i', 'n', 'd', 'e', 'r'];
    const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <> 
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={Taj} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Mern Stack Developer</h2>
                <Link to="../My-Protofolio/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
         <Loader type="pacman" />
        </>
        
    );
};

export default Home;
