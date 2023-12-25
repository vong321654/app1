import React from 'react'
let r = 'React'
let rn = 'React-Native'
function App() {
  const el =(
    <div>
      Create Web & Mobile Apps<br/>
      with <span dangerouslySetInnerHTML={{ __html : r }}/> & {rn}
    </div>
  )
  return el
}

export default App;
