import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";




export default function ForgotPassword() {

    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    
    async function handleSubmit(e){
        e.preventDefault()

        try {
        setError('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("Verifica la bandeja de tu correo electronico!")
    }catch{
        setError('Fallo al recuperar contraseña!')
    }

    setLoading(false)
}

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Olvide mi Contraseña</h2>
                    {error && <Alert variant="danger">{{error}}</Alert>}
                    {message && <Alert variant="success">{{message}}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>

                        <Button disabled={loading} className="w-100" type="submit">Recuperar Contraseña</Button>

                    </Form>

                    <div className="w-100 text-center mt-3">
                        <Link to="/iniciarsesion">Iniciar Sesion</Link>
                    </div>
                </Card.Body>   
            </Card>  
          <div className="w-100 text-center mt-2">
              Necesitas una Cuenta? - <Link to="/registrarse">Registrate</Link>
          </div>
        </>
    )
}
