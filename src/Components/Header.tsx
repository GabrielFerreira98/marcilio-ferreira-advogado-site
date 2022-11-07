import  logo  from '../assets/logo.png'
import { FastLinkHeader } from './FastLinkHeader'

export function Header(){
    return (
      <div className="h-[12vh] bg-marcilio-blue-700 flex items-center justify-center">
        <div className='w-[70vw] flex items-center justify-between'>
          <img className="h-20 w-20" src={logo} alt="" />
          <div className='flex gap-12'>
            <FastLinkHeader children='Home'/>
            <FastLinkHeader children='Sobre'/>
            <FastLinkHeader children='Notícias'/>
            <FastLinkHeader children='Contato'/>
          </div>        
        </div>       
      </div>
    )
}