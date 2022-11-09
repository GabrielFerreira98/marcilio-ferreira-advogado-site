import { WhatsappLogo } from 'phosphor-react'
export function WhatsAppButton(){
    return ( 
        <div className="h-12 w-12 bg-emerald-400 rounded-full fixed bottom-4 right-4 flex items-center justify-center cursor-pointer hover:bg-emerald-500 transition 300ms">
            <WhatsappLogo color="white" size={32}/>
        </div> 
    )
}