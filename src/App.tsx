import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"

import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Notices } from "./Pages/Notices"

import { WhatsappLogo } from 'phosphor-react'

function App() {
  return (
    <>
      <Header/>

      <Home/>

      <About/>

      <Notices/>

      <Contact/>

      <Footer/>

      <div className="h-12 w-12 bg-emerald-400 rounded-full fixed bottom-4 right-4 flex items-center justify-center cursor-pointer hover:bg-emerald-500 transition 300ms">
        <WhatsappLogo color="white" size={32}/>
      </div>
      
      
    </>
  )
}

export default App
