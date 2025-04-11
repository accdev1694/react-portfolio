import { Link } from "react-router-dom";
import "../../styles/global.css";
import styles from "./FooterLinks.module.css"
import { pageData } from "../../pageData";

const FooterLinks = ({pageTitle}) => {  
    
    
    return ( <div className={styles.footerLinks}>        
        {/* {sectionData[pageTitle].imgs.map((img, index)=>(
            <a href={sectionData[pageTitle].urls?.[index] || "#"} key={index} >
                <img src={img} alt="" className={styles[sectionData[pageTitle].id]}/>
            </a>
        ))
        
        } */}
      </div> );
}
 
export default FooterLinks;