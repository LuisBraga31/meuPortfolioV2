import styles from './Skills.module.css';

import icons from '../../data/icons.json';

export default function Skills() {

    return (
        
        <section id="skills" className={styles.skills}>
           
            <div className={styles.skillsText}> 
                <h2> Skills </h2>
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

    )
  
}