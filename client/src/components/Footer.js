import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="iconlar">
                <a href="/iletisim"><i class="fab fa-facebook" style={{color:'blue'}}></i></a>
                <a href="/iletisim"><i class="fab fa-twitter" style={{color:'lightblue'}}></i></a>
                <a href="/iletisim"><i class="fab fa-instagram" style={{color:'rgb(200, 51, 117)'}}></i></a>
                <a href="/iletisim"><i class="fas fa-envelope-open-text" style={{color:'red'}}></i></a>
                <a href="/iletisim"><i class="fas fa-phone-square-alt" style={{color:'lightgreen'}}></i></a>
            </div>
            <div className="footeryazi">
                <h3>Copyright © 2021 YEŞİLNACAR/CLUB
                            Bütün Hakları Saklıdır.</h3>
            </div>
            <div className="yaziiki">
                <p>YESILNACAR LTD. ŞTİ. - VN: 111111111 - ETİMESGUT, 06 - ANKARA - TÜRKİYE</p>
            </div>
        </div>
    )
}

export default Footer
