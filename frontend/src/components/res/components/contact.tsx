import '../../../styles/contact.css'
import ws_contact from '../../../assets/whats_contact.png'
function Contact(){
    return(    
        <>
            <div className="title">
                <h2>My contact info.</h2>
            </div>
            
            <div className="contenedor">
                <div className='App'>
                    <h3><img src={ws_contact} height={40} width={40}/>WhatsApp</h3>
                </div>
                <li>
                    Link: 
                </li>
                <br></br>
            </div>
        </>
    )
}

export default Contact;