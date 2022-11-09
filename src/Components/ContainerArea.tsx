interface ContainerArea{
    children: string;
}

export function ContainerArea(ContainerArea: ContainerArea){
    return (
        <div className="mb-[30px] flex items-center justify-center h-24 w-[30%] bg-marcilio-blue-500 rounded-lg drop-shadow-2xl transition 300ms cursor-pointer
        hover:font-bold">
            <div className="text-marcilio-blue-100 text-xl ">{ContainerArea.children}</div>
        </div>
    )
}