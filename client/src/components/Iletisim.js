import React from 'react'
import './Iletisim.css'
import logo from './logo/logo-my.png'
import Header from './Header'

const Iletisim = () => {
    return (
        <>
        <Header />
        <div className="iletisim">
            <span><img src={logo} alt="logo" /></span>
            <div className="yazi">
                <h2>YEŞİLNACAR/CLUB</h2>
                <h4>Öneri ve Şikayetleriniz için</h4>
            </div>
            <div className="icon">
                <a href=""><i class="fab fa-facebook" style={{color:'blue'}}>&nbsp; Facebook</i></a>
                <a href=""><i class="fab fa-twitter" style={{color:'lightblue'}}>&nbsp; Twitter</i></a>
                <a href=""><i class="fab fa-instagram" style={{color:'rgb(200, 51, 117)'}}>&nbsp; Instagram</i></a>
                <a href=""><i class="fas fa-envelope-open-text" style={{color:'red'}}>&nbsp; Mail</i></a>
                <a href=""><i class="fas fa-phone-square-alt" style={{color:'lightgreen'}}>&nbsp; Bizi Arayın</i></a>
            </div>
        </div>
        </>
    )
}

export default Iletisim
