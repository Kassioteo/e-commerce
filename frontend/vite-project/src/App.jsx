import {Route, Routes} from 'react-router-dom'
import FormLogin from './components/Forms/FormLogin'
import FormRegister from './components/Forms/FormRegister'
import PaginaPrincipal from './components/PaginaPrincipal'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<PaginaPrincipal/>}/>
      <Route path="/login" element={<FormLogin/>}/>
      <Route path="/register" element={<FormRegister/>}/>
    </Routes>
    </>
  )
}

export default App
