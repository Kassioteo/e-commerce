import {Route, Routes} from 'react-router-dom'
import FormLogin from './components/Forms/FormLogin'
import FormRegsiter from './components/Forms/FormRegister'

function App() {
  return (
    <>
    <h1>E-COMMERCE</h1>
    <Routes>
      <Route path="/" element={<FormLogin/>}/>
      <Route path="/register" element={<FormRegsiter/>}/>
    </Routes>
    </>
  )
}

export default App
