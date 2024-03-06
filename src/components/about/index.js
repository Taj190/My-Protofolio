import './index.scss'
import AnimatedLetters from '../AnimatedLetter'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBootstrap, faCss3, faGitAlt, faHtml5, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
const About =  ()=>{
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['A','b','o','u','t' ,' ', 'm','e']}
                    idx={15}
                    
                    />
                </h1>
               
               <p>"As a passionate front-end developer, I am actively seeking new opportunities to apply my skills and expertise in creating dynamic and user-friendly web applications. With a solid foundation in front-end technologies such as HTML, CSS, and JavaScript, coupled with experience in frameworks like React.js,</p>

               <p>
               I am confident in my ability to deliver high-quality solutions that meet the needs of clients and users alike. With a strong foundation in front-end development and a passion for learning new technologies, I approach every project with enthusiasm and dedication.
               </p>
               <p>
               With a strong background in front-end development and a keen interest in mastering the MERN stack, I am a dedicated and enthusiastic professional seeking opportunities to leverage my skills in creating innovative and user-centric web applications.
               </p>
            </div>
            
            <div className='stage-cube-cont'>
                <div className='cubespinner'>

                    <div className='face1'>
                      <FontAwesomeIcon icon={faNodeJs} color="#68a063"/>
                    </div>
                      
                    <div className='face2'>
                      <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>

                    <div className='face3'>
                      <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>

                    <div className='face4'>
                      <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                      <FontAwesomeIcon icon={faBootstrap} color="#563d7c"/>
                    </div>
                    <div className='face6'>
                      <FontAwesomeIcon icon={faGitAlt} color="#EC4"/>
                    </div>
                </div>

            </div>


        </div>
        
        <Loader type="pacman" />
        </>
    )
}
export default  About  