import { useState } from 'react'
import FormLogin from './FormLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>E-COMMERCE</h1>
      <FormLogin/>
    </>
  )
}

export default App
