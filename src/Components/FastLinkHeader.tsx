interface FastLinkHeader{
    children: string
}

export function FastLinkHeader(FastLinkHeaderProps: FastLinkHeader){
    return(
        <div className='w-[20%] text-marcilio-blue-100 text-xl hover:font-semibold cursor-pointer transitions 300ms hover:underline items-center'>{FastLinkHeaderProps.children}</div>
    )
}