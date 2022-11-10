import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"

import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Notices } from "./Pages/Notices"
import { WhatsAppButton } from "./Components/WhatsAppButton"
import { InstagramPosts } from "./Components/InstagramPosts"

function App() {
  return (
    <>
      <InstagramPosts/>
      <Header/>
      <Home/>
      <About/>
      <Notices/>
      <Contact/>
      <Footer/>
      <WhatsAppButton />
    </>
  )
}

export default App
