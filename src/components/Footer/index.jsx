import React from 'react';

import gpsIcon from '../../assets/images/gps.svg'
import facebookIcon from '../../assets/images/facebook.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import './styles.css';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <span>
                    <img src={gpsIcon} alt="icone de gps"/>
                </span>
                <div className="footer-texts">
                    <p>Avenida Orfeo Paravente, 182</p>
                    <p>(11)96802-5673</p>
                    <p>kikahamburgueria@gmail.com</p>
                </div>
                <div className="footer-links">
                    <a target="_blank"  rel="noopener noreferrer" href="http://api.whatsapp.com/send?1=pt_BR&phone=5511968025673"><img src={facebookIcon} alt="Icone link do facebook"/></a>
                    <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/hamburgueria_kika/"><img src={instagramIcon} alt="Icone link do instagram"/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;