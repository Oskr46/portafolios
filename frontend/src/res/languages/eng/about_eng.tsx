function About_Eng(){
return(
    <>
        <div className='aboutMe'>
            <h3>Data about me.</h3>
            <div className="me_image"><img src="../src/assets/me.jpg" width={200} height={220}></img></div>
            <p>My name is Oscar Rojas. I'm 20 years old and from Venezuela. I'm currently studying Computer Engineering 
                at Gran Mariscal de Ayacucho University, where I'm in my 6th semester. Throughout my academic journey, I've worked 
                on various projects for university assignments.This portfolio serves as a way to showcase those projects and 
                preserve them over time as evidence of my growth and skills throughout my career. Feel free to explore all the 
                content in this portfolio.
            </p>
    
            <h3>What Programming environment do you work in?</h3>
                <p>I have worked with multiple programming languages and environments, primarily in C++, PHP + HTML + CSS, 
                    Pascal, as well as some Python and JavaScript. For my community service project, I used WordPress with 
                    plugins such as Elementor and Yoast SEO. This portfolio was built using React + Vite, a framework that runs 
                    on TypeScript (extended).
                    <div className="list">
                        <li><img src="../src/assets/icons/php_icon.png" width={20}></img>PHP + CSS + HTML</li>
                        <li><img src="../src/assets/icons/c++_icon.png" width={20}></img>C++</li>
                        <li><img src="../src/assets/icons/physics_icon.png" width={20}></img>JavaScript (React + Vite)</li>
                        <li><img src="../src/assets/icons/wordpress_icon.png" width={20}></img>CMS WordPress</li>
                        <li><img src="../src/assets/icons/python_icon.png" width={20}></img>Python</li>
                        <li><img src="../src/assets/icons/domain_icon_bg.png" width={20}></img>Dart</li>
                        <li><img src="../src/assets/icons/visual-basic_icon.png" width={20}></img>Visual Basic</li>
                        <li><img src="../src/assets/icons/domain_icon_bg.png" width={20}></img>Pascal</li>
                    </div>

                    Additionally, I have experience with SQL and knowledge in designing relational databases, including 
                    creating and managing tables with proper relationships in PostgreSQL and MySQL. <br></br>

                    I also have knowledge to work with:
                    <div className="list">
                        <li><img src="../src/assets/icons/domain_icon_bg.png" width={20}></img>Git</li>
                        <li><img src="../src/assets/icons/github_icon_bg.png" width={20}></img>GitHub</li>
                        <li><img src="../src/assets/icons/trello_icon_bg.png" width={20}></img>Trello</li>
                        <li><img src="../src/assets/icons/domain_icon_bg.png" width={20}></img>Figma</li>
                    </div>
                Which are crucial tools for teamwork when carrying out a project.
                </p>
        </div>
    </>
)
}

export default About_Eng;