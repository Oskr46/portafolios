import logo from '../../../assets/logo.png'
import '../../../styles/home.css'

interface homeProp{
    onNavigate: (page: 'Home' | 'About' | 'Projects' | 'Contact') => void;   
}

function Home({onNavigate}:homeProp){
    return(
        <>  
            <div className='myName'>
                <h2>Computer Engineer 
                    <br></br>
                    Oscar Rojas
                </h2>
                <img className="logo" src={logo} width={200} height={200}></img>
                <h4>See What I've Built Here</h4>
                <button className='getStarted' onClick={()=> onNavigate('Projects')}>See my Projects</button>
            </div>
            <div className='me'>
                <div className='meIn'>
                    <h2>A bit about me</h2>
                    <p>Hey! I'm Oscar Rojas, a Computer Engineering student at Gran Mariscal de Ayacucho University (UGMA) 
                        in Venezuela. I'm currently in my 6th semester, and this is my digital portfolio. Here, you'll find projects 
                        I've worked on—both for university assignments and independent side projects. Hope you like my work! :D
                    </p>
                </div>
                <br></br>
                <div className='meSp'>
                    <h2>Un poco sobre mi</h2>
                    <p>¡Hola!, mi nombre es Oscar Rojas, estudio en la Universidad Gran Mariscal de Ayacucho (UGMA) en Venezuela
                        estoy en el 6to semestre de la Carrera Ingenieria en Informatica. Este es mi portafolio digital, donde
                        usted como interesado podra ver los proyectos que he realizado tanto para asignaciones de la Universidad
                        como para proyectos emergentes. Espero le guste mi trabajo :D
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;