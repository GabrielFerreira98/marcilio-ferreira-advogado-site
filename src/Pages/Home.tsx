import { ContainerArea } from "../Components/ContainerArea";


export function Home(){
  return(
    <div className="h-[88vh] bg-marcilio-blue-300 flex flex-col items-center justify-center">

    <div className="flex items-center justify-center gap-32">
      <ContainerArea children="Administrativo" ></ContainerArea>
      <ContainerArea children="Penal" ></ContainerArea>
      <ContainerArea children="Civil" ></ContainerArea>
    </div>

    <div className="flex items-center justify-center gap-32 mt-12">
      <ContainerArea children="Administrativo" ></ContainerArea>
      <ContainerArea children="Penal" ></ContainerArea>
      <ContainerArea children="Civil" ></ContainerArea>
    </div>

    <div className="flex items-center justify-center gap-32 mt-12">
      <ContainerArea children="Administrativo" ></ContainerArea>
      <ContainerArea children="Penal" ></ContainerArea>
      <ContainerArea children="Civil" ></ContainerArea>
    </div>

    </div>
  )   
}