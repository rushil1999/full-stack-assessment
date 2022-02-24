import {NextPage} from 'next';
import {FiUser} from 'react-icons/fi';
import {BsBag} from 'react-icons/bs';
import {BsSearch} from 'react-icons/bs';
import styles from '../styles/subNavBar.module.css';

//This is a pure HTML/CSS focused components without much core logic
const SubNavBar: NextPage = () =>{
  return(
    <nav className={styles.subNavBar}>
      <div style={{paddingLeft: '15px', color: "white"}}><strong>Stand For Tree</strong></div>
      <div className={styles.subNavBarMiddle}>
          <a href="#">OUR FORESTS</a>
          <a href="#"> OUR IMPACTS </a>
          <a href="#"> HOW IT WORKS </a>
          <a href="#"> WHY FORESTS </a>
          <a href="#"> MEDIA {'&'} BLOG </a>
          <a href="#"> ABOUT </a>
      </div>
      <div className={styles.subNavBarRight}>
        <div className={styles.menu}>
          <div>
            <a href="#" style={{color: "white", paddingTop: '0px',}}>USD </a>
            <ul>
              <a href="#">USD $</a>
              <a href="#">Euro</a>
              <a href="#">GBP</a>
              <a href="#">COP</a>
            </ul>
          </div>
        </div>
        <a href="#">
          <BsSearch/>
        </a>
        <a href="#">
          <BsBag/>
        </a>
        <a href="#">
          <FiUser/>
        </a>
        
      </div>
    </nav>

  );
}

export default SubNavBar;