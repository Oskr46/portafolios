import { useState } from 'react';
import '../../../styles/about.css'
import About_Eng from '../languages/eng/about_eng.tsx';
import About_Esp from '../languages/esp/about_esp.tsx';
import logo from '../../../assets/logo.png'

function About(){
    const[esp, setEsp] = useState(false);
    const[eng, setEng] = useState(false);

    function handleEsp(){
        setEsp(true);
        setEng(false);
    }

    function handleEng(){
        setEsp(false);
        setEng(true);
    }

    return(
    <>  
        <img className='logo' src={logo} width={180} height={180}></img>
        <h3>Select a language to see the info</h3>
        <div className='botones'>
        <button className="getStarted" onClick={handleEsp}>Español</button>
        <button className='getStarted' onClick={handleEng}>English</button>
        </div>
        {esp && <About_Esp/>}
        {eng && <About_Eng/>}
    </>
    )
}

export default About;