import styles from './HomePage.module.css';
import Perfil from '../../assets/perfil.png';

import icons from '../../data/icons.json';
import projects from '../../data/projects.json';

export default function HomePage() {

    return (
        <main>
            
            <section id="introduction" className={styles.introduction}>
            
                <div className={styles.introductionText}>
                    <div>
                        <h1> Olá! Eu sou </h1>
                        <h1> <strong className={styles.luisbragadev}> Luis Gustavo Braga</strong> </h1>
                    </div>
                    <p> Sou um jovem mineiro de 23 anos e desenvolvedor Front-end.</p>
                </div>
                
                <div className={styles.introductionImage}>
                    <img src={Perfil} alt="Luis Braga - perfil"/>
                </div>

            </section>

            <section id="aboutme" className={styles.aboutMe}>
            
                <div className={styles.aboutMeText}> 
                    <h2> Sobre Mim</h2>
                    <p> Perfil profissional - Infos sobre mim</p>
                </div>
                
                <div className={styles.aboutMeContent}> 
                    
                    <div className={styles.contentText}>
                        <p> 
                            Olá, meu nome é Luis Gustavo Braga! Eu sou formado em Sistemas de Informação pelo Centro Universitário 
                            de Itajubá - FEPI. Eu gosto muito de estudar tecnologia, especialmente na área de desenvolvimento front-end, 
                            mas também gosto de estudar outras áreas como back-end, testing e banco de dados, acho muito importante estar 
                            sempre atualizado com novas tecnologias.
                        </p>
                    </div>

                    <div className={styles.contentIcons}>
                        <p> Nascimento: 31 jul 2000</p>
                        <p> Nacionalidade: Brasileiro</p>
                        <p> Endereço: Itajubá, MG, Brasil</p>
                        <p> Línguas: Português e Inglês</p>
                        <p> Email: luisgustavobsilva@gmail.com </p>
                        <p> Escolaridade: Superior completo </p>
                    </div>

                </div>

            </section>

            <section id="skills" className={styles.skills}>
           
                <div className={styles.skillsText}> 
                    <h2> Habilidades </h2>
                    <p> Algumas de minhas competências </p>
                </div>

                <div className={styles.skillsIcons}>
                    
                    {icons.map(item => (
                    <div className={styles.icon} key={item.id}>
                        <img src={item.image} alt="html-icon"/>
                        <span> {item.name} </span>
                    </div>
                    ))}
                    
                </div>

            </section>

            <section id="projects" className={styles.projects}>
            
                <div className={styles.projectsText}> 
                    <h2> Projetos </h2>
                    <p> Alguns de meus projetos pessoais </p>
                </div>

                <div className={styles.projectsContent}>
                    {projects.map(item => (
                        <div className={styles.projectItem} key={item.id}>
                            <img src={item.image}/>
                            <div className={styles.projectInfo}>
                                <h4> {item.name} </h4>
                                <p> {item.description} </p>
                                <div className={styles.buttonsProject}>
                                    <a href={item.urlSite}> Acessar </a>
                                    <a href={item.urlGitHub}> GitHub </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className={styles.projectsSeeMore}>
                    <a href="https://github.com/LuisBraga31?tab=repositories"> 
                        <span> Veja outros Projetos</span> 
                    </a>
                </div>

            </section>

        </main>
    )

}