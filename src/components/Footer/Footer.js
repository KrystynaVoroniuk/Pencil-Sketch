import React from 'react'
import youtube from '../img/youtube.png'
import facebook from '../img/facebook.png'
import telegram from '../img/telegram.png'


export default function Footer() {
    return (
        <footer className="tm-footer">
      <p className="text-xs-center-l">© 2020-2021 ART SKETCH. Всі права захищені.</p> 
      <div className="footer-left">
        <p className="text-xs-center-r">Поділися c друзями</p>
        <div className="logo-social">
        <img src={youtube} width="40" height="35" alt=""/>
        <img src={facebook} width="40" height="35" alt=""/>
        <img src={telegram} width="40" height="35" alt=""/>
        </div>
      </div>
    </footer>
    )
}

