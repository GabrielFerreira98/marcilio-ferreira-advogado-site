interface ContainerArea{
    children: string;
}

export function ContainerArea(ContainerArea: ContainerArea){
    return (
        <div className="flex items-center justify-center h-24 w-72 bg-marcilio-blue-500 rounded-lg drop-shadow-2xl hover:translate-x-[15px] hover:translate-y-[-15px] transition 300ms cursor-pointer
        hover:font-bold">
            <div className="text-marcilio-blue-100 text-xl ">{ContainerArea.children}</div>
        </div>
    )
}