import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/iniciarsesion")
    } catch {
      setError("Fallo al iniciar sesion")
    }
  }

  return (
    <>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link to="/" className="navbar-brand active">CORPOELEC</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
</nav>

      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Perfil</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/verusuarios" className="btn btn-primary w-100 mt-3">
            Ver Usuarios
          </Link>
          <Link to="/registrar_usuario" className="btn btn-primary w-100 mt-3">
            Registrar Usuario
          </Link>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Modificar Perfil
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Cerrar Sesion
        </Button>
      </div>
    </>
  )
}
