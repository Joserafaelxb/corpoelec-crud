import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";


export default function Singup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {singup} = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    
    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("La contraseña no es igual!")
        }

        try {
        setError('')
        setLoading(true)
        await singup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
    }catch{
        setError('Falla al crear la cuenta!')
    }

    setLoading(false)
}

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Registrate</h2>
                    {error && <Alert variant="danger">{{error}}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group id="email">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Contraseña </Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>

                        <Form.Group id="password_confirm">
                            <Form.Label>Confrima tu Contraseña </Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>


                        <Button disabled={loading} className="w-100" type="submit">Registrate</Button>

                    </Form>
                </Card.Body>   
            </Card>  
          <div className="w-100 text-center mt-2">
            Ya tienes una cuenta? - <Link to="/iniciarsesion">Inicia Sesion</Link>
          </div>
        </>
    )
}
