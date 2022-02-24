import { NextPage } from "next";
import styles from "../styles/navBar.module.css";
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillYoutube} from 'react-icons/ai';
import {FaInstagram} from 'react-icons/fa';
import {CgMail} from 'react-icons/cg';

const NavBar: NextPage = () =>{
  return(
    <nav className={styles.navBar}>
      <div className={styles.navIcons}>
        <a href="#">
          <AiOutlineTwitter/> 
        </a>
        <a href="#">
          <FaFacebookF/> 
        </a>
        <a href="#">
          <AiFillYoutube/>
        </a>
        <a href="#">
          <FaInstagram/> 
        </a>
        <a href="#">
          <CgMail/>
        </a>
      </div>
      <div className={styles.navOptions}>
        <div>
          For Business
        </div>
        <div>
          Donations
        </div>
        <div>
          Footprint Calculator
        </div>
        <div>
          Affiliate Prgoram
        </div>
        <div>
          Espanol
        </div>
        <div>
          Portugese
        </div>
      </div>
    </nav>

  );
}

export default NavBar;