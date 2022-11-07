import officePhoto from '../assets/office-photo.png'

export function About(){
    return(
        <div className="h-screen bg-white flex items-center justify-center ">
            <div className="w-4/12 mr-28">
            <div className="text-black text-3xl font-bold mb-4">
            Sobre nós
            </div>
            <div className="text-black text-lg text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
            </div>
            </div>
            <img src={officePhoto} className="h-96"/>
        </div>
    )
    
}