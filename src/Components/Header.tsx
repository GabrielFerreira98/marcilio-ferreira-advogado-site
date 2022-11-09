import  logo  from '../assets/logo.png'
import { FastLinkHeader } from './FastLinkHeader'

export function Header(){
    return (
      <div className="h-[12vh] bg-marcilio-blue-700 flex items-center justify-center">
        <div className='w-[80%] bg-indigo-900 flex items-center justify-between'>
          <img className="h-20 w-20 bg-yellow-500 " src={logo} alt="" />
          <div className='w-[45%] gap-12 bg-yellow-500 flex items-center justify-center'>
            <FastLinkHeader children='Home'/>
            <FastLinkHeader children='Sobre'/>
            <FastLinkHeader children='Notícias'/>
            <FastLinkHeader children='Contato'/>
          </div>        
        </div>       
      </div>
    )
}