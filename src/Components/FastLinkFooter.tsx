interface FastLinkFooter{
    children: string
}

export function FastLinkFooter(FastLinkFooterProps: FastLinkFooter){
    return(
        <div className='hover:font-semibold cursor-pointer transition 300ms'>{FastLinkFooterProps.children}</div>
    )
}