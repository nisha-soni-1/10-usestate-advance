import React, { useState } from 'react'

const App = () => {

  const [num,setNum] = useState({user:'Nisha',age:22})

  const btnClicked = ()=>{
    const newNum = {...num};
    newNum.user = 'Aman'
    newNum.age = 29
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App

// 5:47:30