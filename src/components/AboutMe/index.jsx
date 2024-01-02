import { FaCalendarAlt, FaFlag, FaEnvelope, FaBook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import styles from './AboutMe.module.css';

export default function AboutMe() {

    return (
        
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
                    <p> <FaCalendarAlt size={18}/> Nascimento: 31 jul 2000</p>
                    <p> <FaFlag size={18}/> Nacionalidade: Brasileiro</p>
                    <p> <FaLocationDot size={18}/> Endereço: Itajubá, MG, Brasil</p>
                    <p> <BiWorld size={20}/> Línguas: Português e Inglês</p>
                    <p> <FaEnvelope size={18}/> Email: luisgustavobsilva@gmail.com </p>
                    <p> <FaBook size={18}/> Escolaridade: Superior completo </p>
                </div>

            </div>

        </section>

    )
  
}