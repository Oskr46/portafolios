
function About_Esp(){
return(
    <>
        <div className='aboutMe'>
            <h3>Datos sobre mí</h3>
            <div className="me_image"><img src="../src/assets/me.jpg" width={200} height={220}></img></div>
            <p>Mi nombre es Oscar Rojas. Tengo 20 años y soy de Venezuela. Actualmente estoy estudiando Ingeniería en Computación 
            en la Universidad Gran Mariscal de Ayacucho, donde curso mi 6to semestre. A lo largo de mi trayectoria académica, he 
            trabajado en diversos proyectos para asignaturas universitarias. Este portafolio sirve para mostrar esos proyectos y 
            preservarlos como evidencia de mi crecimiento y habilidades a lo largo de mi carrera profesional. No dudes en explorar 
            todo el contenido de este portafolio.
            </p>

            <br></br>

            <h3>¿En qué entornos de programación trabajas?</h3>
            <p>He trabajado con múltiples lenguajes de programación y entornos, algunos de ellos son:
                <div className="list">
                    <li><img src="../src/assets/icons/php_icon.png" width={20}></img>PHP + CSS + HTML</li>
                    <li><img src="../src/assets/icons/c++_icon.png" width={20}></img>C++</li>
                    <li><img src="../src/assets/icons/java-script_icon.png" width={20}></img>JavaScript (React + Vite)</li>
                    <li><img src="../src/assets/icons/wordpress_icon.png" width={20}></img>CMS WordPress</li>
                    <li><img src="../src/assets/icons/python_icon.png" width={20}></img>Python</li>
                    <li><img src="../src/assets/icons/domain_icon_bg.png" width={20}></img>Dart</li>
                    <li><img src="../src/assets/icons/visual-basic_icon.png" width={20}></img>Visual Basic</li>
                    <li><img src="../src/assets/icons/domain_icon_bg.png" width={20}></img>Pascal</li>
                </div>
            Adicionalmente, tengo experiencia con SQL y conocimientos en diseño de bases de datos relacionales, incluyendo la 
            creación y gestión de tablas con relaciones adecuadas en PostgreSQL y MySQL. <br></br>

            Tambien poseo conocimientos para trabajar con:
            <div className="list">
                    <li><img src="../src/assets/icons/domain_icon_bg.png" width={20}></img>Git</li>
                    <li><img src="../src/assets/icons/github_icon_bg.png" width={20}></img>GitHub</li>
                    <li><img src="../src/assets/icons/trello_icon_bg.png" width={20}></img>Trello</li>
                    <li><img src="../src/assets/icons/domain_icon_bg.png" width={20}></img>Figma</li>
            </div>
            Las cuales son herramientas cruciales para el trabajo en equipo a la hora de realizar algun proyecto.
            </p>
        </div>
    </>
)
}

export default About_Esp;