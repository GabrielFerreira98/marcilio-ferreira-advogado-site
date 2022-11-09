import  BlueLogo  from '../assets/blue-logo.png'
import { FastLinkFooter } from './FastLinkFooter'

import { InstagramLogo, LinkedinLogo, FacebookLogo, TwitterLogo, MapPin } from 'phosphor-react'

export function Footer(){
    return (
      <div className="h-[20vh] bg-marcilio-blue-300 flex items-center justify-center"> 
        <div className='w-[80%] flex items-center space-between gap-24'>
           <img className='h-24  items-center' src={BlueLogo} alt=""/>
           <div className="w-1/3  flex flex-col items-center">           
              <FastLinkFooter children='Home'/>
              <FastLinkFooter children='Sobre'/>
              <FastLinkFooter children='Notícias'/>
              <FastLinkFooter children='Contato'/>
           </div>
           <div className='flex items-center flex-col'>
              <div className='font-bold mb-2'>Venha nos conhecer!</div>
              <button className='bg-marcilio-blue-700 w-56 p-2 rounded-xl flex items-center justify-center hover:bg-marcilio-blue-500 transition 300ms'>
                <MapPin size={24} color='white'/>
                <div className='text-white text-sm ml-2'>
                  Abrir o Google Maps
                </div>
              </button>
           </div>
           <div className='w-1/3  flex flex-col items-center'>
              <div className='font-bold mb-2'>Siga-nos!</div>
              <div className='flex gap-2'>
                <InstagramLogo size={32} cursor='pointer'/>
                <LinkedinLogo size={32} cursor='pointer'/>
                <FacebookLogo size={32} cursor='pointer'/>
                <TwitterLogo size={32} cursor='pointer'/>
              </div>
           </div>
        </div>
      </div>
    )
}