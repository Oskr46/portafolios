import logo from '../../../../assets/logo.png'
import '../../../styles/home.css'

interface homeProp{
    onNavigate: (page: 'Home' | 'About' | 'Projects' | 'Contact') => void;   
}
function Home_Esp({onNavigate}: homeProp){
    return(
        <>
        <div className='myName'>
                <h2>Computer Engineer 
                    <br></br>
                    Oscar Rojas
                </h2>
                <img className="logo" src={logo} width={160} height={140}></img>
                <h4>See What I've Built Here</h4>
                <button className='getStarted' onClick={()=> onNavigate('Projects')}>See my Projects</button>
        </div>
        <div className='me'>
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
export default Home_Esp;