import { ContainerArea } from "./Components/ContainerArea"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"

function App() {
  return (
    <div>
      <Header/>

      <div className="h-[88vh] bg-marcilio-blue-300 flex flex-col items-center justify-center">

        <div className="flex items-center justify-center gap-32">
          <ContainerArea children="Administrativo" ></ContainerArea>
          <ContainerArea children="Penal" ></ContainerArea>
          <ContainerArea children="Civil" ></ContainerArea>
        </div>

        <div className="flex items-center justify-center gap-32 mt-16">
          <ContainerArea children="Administrativo" ></ContainerArea>
          <ContainerArea children="Penal" ></ContainerArea>
          <ContainerArea children="Civil" ></ContainerArea>
        </div>

        <div className="flex items-center justify-center gap-32 mt-16">
          <ContainerArea children="Administrativo" ></ContainerArea>
          <ContainerArea children="Penal" ></ContainerArea>
          <ContainerArea children="Civil" ></ContainerArea>
        </div>
        
      </div>

      <div className="h-screen bg-white">

      </div>

      <div className="h-screen bg-marcilio-blue-300">

      </div>

      <div className="h-[80vh] bg-white">

      </div>

      <Footer/>
    </div>
  )
}

export default App
