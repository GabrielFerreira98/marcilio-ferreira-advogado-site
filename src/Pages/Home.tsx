import { ContainerArea } from "../Components/ContainerArea";


export function Home(){
  return(
    <div className="h-[88vh] bg-marcilio-blue-300 flex items-center justify-center">
      <section className="h-[50%] w-[80%] bg-yellow-500 flex flex-wrap items-center justify-between">
          <ContainerArea children="Administrativo" ></ContainerArea>
          <ContainerArea children="Penal" ></ContainerArea>
          <ContainerArea children="Civil" ></ContainerArea>
          <ContainerArea children="Administrativo" ></ContainerArea>
          <ContainerArea children="Penal" ></ContainerArea>
          <ContainerArea children="Civil" ></ContainerArea>
          <ContainerArea children="Administrativo" ></ContainerArea>
          <ContainerArea children="Penal" ></ContainerArea>
          <ContainerArea children="Civil" ></ContainerArea>
      </section>
    </div>
  )   
}