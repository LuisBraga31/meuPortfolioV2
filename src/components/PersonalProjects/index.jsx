import styles from './PersonalProjects.module.css';

import projects from '../../data/projects.json';

export default function PersonalProjects() {

    return (

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
        
    )

}