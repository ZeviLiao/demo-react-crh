import React from 'react'
import { useMyHook } from 'crh-app'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App