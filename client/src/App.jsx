import { Routes, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"

import { Navegas } from './components/Navegas'

import { Cardapio } from './pages/Cardapio'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Edit } from './pages/Edit'

function App() {
  
  return (
    <>
      <Navegas />
      <Container className='mb-4'>
        <Routes>
          <Route path="/" exact element={<Home />} />  
          <Route path="/getItems" element={<Cardapio />} />    
          <Route path='/createItem' element={<Create />}/>   
          <Route path='/editItem' element={<Edit />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
