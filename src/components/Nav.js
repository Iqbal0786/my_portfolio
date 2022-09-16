import React, { useState } from 'react';
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
  FaTimes,
  FaBars,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <Link to='/'>
      <div className="logo">{'<Mohammad Iqbal/>'}</div>
      </Link>
      <div className={click ? 'menu active' : 'menu'}>
        <ul className="navvs">
          <li onClick={closeMobileMenu}><a href="#aboutDiv"> About</a></li>
          <li onClick={closeMobileMenu}><a href="#projectDiv">Projects</a> </li>

          <li onClick={closeMobileMenu}> <a href="#bottom">Contact</a> </li>

          <li className="navvs" onClick={closeMobileMenu}>
            <a target="_blank" rel="noreferrer" href={"https://drive.google.com/file/d/1Gy_1AJXUW7M3sjZ2_lIs5pL2Ng0psCA3/view?usp=sharing"}>
              Resume
            </a>
          </li>
        </ul>
        <div className="socials">
          <ul>
            <li className="resumes" onClick={closeMobileMenu}>
              {/* <Link to='/blog'>
                <div>Blogs</div>
              </Link> */}
            </li>
            <li onClick={closeMobileMenu}>
              <a title='iqbal240456@gmail.com'
                target="_blank"
                rel="noreferrer"
                href="mailto:iqbal240456@gmail.com"
              >
                <FaEnvelope />{' '}
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Iqbal0786"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mohammad-iqbal-048113212/"
              >
                <FaLinkedin />
              </a>
            </li>
            {/* <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/a0x001"
              >
                <FaTwitterSquare />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Nav;
// menu
