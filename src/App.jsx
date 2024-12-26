import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [bgColor,setBgColor]=useState("white")

  const click=(bgColor)=>{
    setBgColor(bgColor)
  }

  useEffect(() => {
    const bgdiv=document.getElementById('bg')
    console.log(bgdiv);
    bgdiv.style.backgroundColor=bgColor
  },[bgColor])
  
  

  return (
    <>
      <div id='bg' className='d-flex align-items-center justify-content-center flex-column' style={{height:"100vh"}}>
        <h2 className='p-5 mb-5 text-dark'>Change background color</h2>
        <button onClick = {() => click("red")} className='btn btn-danger mt-5 mb-3 border border-dark' style={{width:"100px"}}>Red</button>
        <button onClick = {() => click("yellow")} className='btn btn-warning mb-3 border border-dark' style={{width:"100px"}}>Yellow</button>
        <button onClick = {() => click("green")} className='btn btn-success border border-dark' style={{width:"100px"}}>Green</button>
      </div>
        
    </>
  )
}

export default App
