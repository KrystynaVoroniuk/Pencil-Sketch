/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { useRef, useState } from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Пароль не збігається')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')

        } catch{
            setError('Не вдалося створити обліковий запис')
        }
        setLoading(false)

        
    }


    return (
        <>
        <div className='center'>
        <Card>
            <Card.Body>
            <h2 className='text-center mb-4'>Зареєструватися</h2>
            {error && <Alert variant='danger'>{error}</Alert> }
            <Form onSubmit={handleSubmit}>
                <Form.Group id='name'>
                    <Form.Label>Введіть ім'я</Form.Label>
                    <Form.Control type='text' required />
                </Form.Group>
                <Form.Group id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                <Form.Group id='email'>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type='password' ref={passwordRef} required />
                </Form.Group>
                <Form.Group id='password-confirm'>
                    <Form.Label>Повторіть пароль</Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} className='w-100' type='submit'>Зареєструватися</Button>

            </Form>
            </Card.Body>       
        </Card>
        
        <div className='w-100 text-center mt-2'>
         Вже є акаунт? <Link to='/login'>Увійдіть</Link> 
        </div>
        </div>
 

        </>
    )
}
