import { Alert, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory} from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext";

export default function LogoutButton() {
 
const [error, setError] = useState('') 
const {logout} = useAuth();
const history = useHistory();
async function handleLogout(){
  setError('')

  try{
    await logout()
    history.push('/start')
  }catch{
    setError('Не вдалося вийти')
  }

}
    return (
        <>
            <Button variant='link' onClick={handleLogout}>Вийти</Button>
          {error && <Alert variant='danger'>{error}</Alert>}
        </>
    )
}
