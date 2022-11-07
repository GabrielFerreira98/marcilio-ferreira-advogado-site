import {InputHTMLAttributes} from 'react'

interface InputProps extends  InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return (
        <input {...props} type="text" className="w-4/5 h-10 bg-white rounded-xl pl-8 pr-8 outline-none" />
    )
}