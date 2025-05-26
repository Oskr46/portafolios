import '../../styles/contact.css'
function Contact(){
    return(    
        <>
            <div className="title">
                <h2>My contact info.</h2>
            </div>
            
            <div className="contenedor">
                <h2>Contact Apps</h2>
                <div className='App'>
                    <a className='contact_item' href=''><img src="src/assets/icons/linkedin_icon_bg.png" width={45} alt='Mirar Perfil de LinkedIn'/>See my Profile</a>
                    <a className='contact_item' href=''><img src="src/assets/icons/whatsapp_icon_bg.png" width={45} alt='Escribir al Whatsapp'/>Text me</a>
                    <a className='contact_item' href=''><img src="src/assets/icons/instagram_icon_bg.png" width={45} alt='Mirar Perfil de GitHub'/>My IG Profile</a>
                    <a className='contact_item' href=''><img src="src/assets/icons/gmail.png" width={45} alt='Mirar Perfil de GitHub'/>Mail me</a>
                </div>
            </div>
        </>
    )
}

export default Contact;