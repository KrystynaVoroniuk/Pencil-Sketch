import React, { useState } from 'react'
import logo from '../img/logo.JPG'
import '../../components/styles.css'
import { useHistory, Link} from 'react-router-dom'
import { Button } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
    const {currentUser, logout}  = useAuth()

    const [error, setError] = useState('')
    const history = useHistory();
  
    async function handleLogout() {
        setError('')
  
        try {
          await logout()
          history.push('/start')
        } catch {
            setError('Ошибка!')
        }
    }
  
    return (
        <div className="tm-banner">
        <div className="banner">
          <img src={logo} width="250" height="90" alt=""/>
          <p className="tm-banner-text">ART SKETCH</p>
          </div>
          <p className='tm-text'>Перетворіть свої фото в мистецтво</p>
          {!currentUser
                ? <div>
                    {error}
                <Link className='linka' to='/login'>ВХІД</Link>
                  </div>
                
                : 
                <Link className='linka' to='/start' onClick={handleLogout}>ВИХІД</Link>
                
                }
          </div>
    )
}
