import styles from './Skills.module.css';

import icons from '../../data/icons.json';

export default function Skills() {

    return (
        
        <section id="skills" className={styles.skills}>
           
           <div className={styles.skillsContainer}>

                <h2> Skills </h2>

                <div className={styles.skillsIcons}>
                
                    {icons.map(item => (
                    <div className={styles.icon} key={item.id}>
                        <span> {item.name} </span>
                        <img src={item.image} alt="html-icon"/>
                    </div>
                    ))}
                
                </div>

           </div>

        </section>

    )
}