import { useState } from 'react'
import './App.css'
import { Button } from "../src/components/ui/button"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button variant={"link"}>O yeah

    </Button>
      <div className='bg-amber-200 h-screen w-full'>hello</div>
    </>
  )
}

export default App
