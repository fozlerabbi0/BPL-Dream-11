
import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers/AllPlayers'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navber from './components/Navber/Navber'
import Selected from './components/Selected/Selected'
import Subscribe from './components/Subscribe/Subscribe'

function App() {
  const [seclect, setSeclect] = useState({
    cart: true,
    status: "cart"
  })
  const handleSeclect =(status) => {
    if(status == "cart"){
      setSeclect({
        cart: true,
        status: "cart"
      })
    }
    else{
      setSeclect({
        cart: false,
        status: "about"
      })
    }
  }
  console.log(seclect)

  return (
    <>
      {/* <h2 className="text-2xl font-bold text-pink-400">Suriya Prity</h2>
      <h1 className='text-3xl font-bold'>Dream 11</h1> */}
      <Navber> </Navber>
      <Header></Header>
       <div className='flex my-14 '>
       <AllPlayers></AllPlayers>
       <Selected seclect={seclect} handleSeclect={handleSeclect}></Selected>
       </div>

      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
