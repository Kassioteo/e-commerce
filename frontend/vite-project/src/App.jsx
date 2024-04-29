import {Route, Routes} from 'react-router-dom'
import FormLogin from './components/Forms/FormLogin'
import FormRegister from './components/Forms/FormRegister'
import PaginaInicial from './components/PaginaInicial'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<PaginaInicial/>}/>
      <Route path="/login" element={<FormLogin/>}/>
      <Route path="/register" element={<FormRegister/>}/>
    </Routes>
    </>
  )
}

export default App
