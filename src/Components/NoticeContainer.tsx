interface NoticeContainer{
    url: string,
    title: string,
    subtitle: string
}

export function NoticeContainer(NoticeProps: NoticeContainer){
    return(
        <div className="bg-white h-2/3 w-96 rounded-xl flex flex-col items-center cursor-pointer hover:translate-x-[-30px] hover:translate-y-[-30px] transition 300ms">
            <img className="w-[80%] mt-8 rounded-2xl shadow-xl" src={NoticeProps.url} alt="Notícia" />
            <div className="w-[80%] mt-8 text-left text-marcilio-blue-700 font-semibold text-2xl">{NoticeProps.title}</div>
            <div className="w-[80%] mt-4 text-justify text-marcilio-blue-500 font-semibold text-md">{NoticeProps.subtitle}</div>
        </div>
    )
    
}