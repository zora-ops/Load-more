import { useState } from 'react'
import LmData from './components/lMdata'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LmData/>
    </>
  )
}

export default App
