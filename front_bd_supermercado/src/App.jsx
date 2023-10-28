import { useState } from 'react'
import mercadoLogo from './assets/mercadoLogo.png'
import './App.css'

function App() {
    const url = "https://api-supermercado.onrender.com/api/v1/users"
    const [users, setUsers] = useState([url])

    // useEffect(() => {
    //     async function getUsers() {
    //         const res = await fetch(url)
    //         const json = await res.json()
    //         setUsers(json.users)
    //     }
    //     getUsers()
    // })
    
  return (
    <>
      <header>
        <div class="menu">
            <i class="bi bi-list"></i>
            <span>Menú</span>
        </div>
        <section>
            <div class="logo">
                <img src={mercadoLogo} className="logo" alt="Mercado logo" />
            </div>
    
            <div class="input-search">
                <input type="text" placeholder="¿Qué estas buscando?"/>
                <button><i class="bi bi-search"></i>Buscar</button>
            </div>
    
            <div class="navbar">
                <div>
                    <a href=""><i class="bi bi-person"></i></a>
                    <a href="">Login</a>
                </div>
            </div>
        </section>
      </header>
      <section class="espacio"></section>

      <main>
          {users.map((users)=> (
              <div key={users} className='column is-3'>
                  <div className='card'>
                      <div className='card-content'>
                          <h2 className="mb-4 is-size-5 has-text-weight-semibold">{users.strUsers}</h2>
                      </div>
                  </div>
              </div>
              ))}
      </main>
    </>
  )
}

export default App