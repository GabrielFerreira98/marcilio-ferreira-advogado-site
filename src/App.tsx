import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"

import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Notices } from "./Pages/Notices"

function App() {
  return (
    <>
      <Header/>

      <Home/>

      <About/>

      <Notices/>

      <Contact/>

      <Footer/>
    </>
  )
}

export default App
