import styles from './PersonalProjects.module.css';

import projects from '../../data/projects.json';

export default function PersonalProjects() {

    return (

        <section id="projects" className={styles.projects}>
            
            <div className={styles.projectsContainer}>
                <h2> Projetos </h2>
                
                <div className={styles.projectsContent}>
                {projects.map(item => (
                    <div className={styles.projectItem} key={item.id}>
                        <div className={styles.projectItemImg}>
                            <img src={item.image}/>
                        </div>
                        
                        <div className={styles.projectInfo}>
                            <h4> {item.name} </h4>
                            <p> {item.description} </p>
                            <div className={styles.buttonsProject}>
                                <a href={item.urlSite} target="_blank" rel="noopener noreferrer"> Ver Projeto </a>
                               {item.urlGitHub && <a href={item.urlGitHub} target="_blank" rel="noopener noreferrer"> Repositório </a>} 
                            </div>
                        </div>
                    </div>
                ))}

                </div>
                
            </div>       

        </section>
        
    )

}