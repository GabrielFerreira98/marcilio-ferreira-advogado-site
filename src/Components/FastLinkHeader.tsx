interface FastLinkHeader{
    children: string
}

export function FastLinkHeader(FastLinkHeaderProps: FastLinkHeader){
    return(
        <div className='text-marcilio-blue-100 text-xl hover:font-semibold cursor-pointer transitions 300ms hover:underline'>{FastLinkHeaderProps.children}</div>
    )
}