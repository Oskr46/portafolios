import home from "../../assets/home_bttn.png"
import projects from "../../assets/dev_bttn.png"
import about from "../../assets/aboutme_bttn.png"
import contact from "../../assets/contact_bttn.png"

interface itemsMenu{
    onNavigate: (page: 'Home' | 'About' | 'Projects' | 'Contact') => void;
}

function Header ({onNavigate}:itemsMenu){
  
    return(
        <div className="header">
            <div className="buttons">
                <button onClick={() => onNavigate('Home')} className="button">
                    <img src={home} width={40} height={40}/>Home
                </button>
                <button onClick={() => onNavigate('About')} className="button">
                    <img src={about} width={40} height={40}/>About Me
                </button>
                <button onClick={() => onNavigate('Projects')} className="button">
                    <img src={projects} width={40} height={40}/>Projects
                </button>
                <button onClick={() => onNavigate('Contact')} className="button">
                    <img src={contact} width={40} height={40}/>Contact
                </button>
            </div>
        </div>
    )
}

export default Header;
