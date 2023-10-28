import { useState } from 'react'
import mercadoLogo from './assets/mercadoLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur doloremque voluptate veniam molestias assumenda aut temporibus obcaecati ut quis distinctio recusandae rem vero excepturi, est nihil vitae id laborum!
          
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, laboriosam harum! Vero perferendis quod iusto esse voluptates facere. Ut error tenetur obcaecati facilis vel excepturi quo magnam delectus quibusdam aspernatur.
        </h1>
      </main>

      <footer>
      </footer>
    </>
  )
}

export default App
