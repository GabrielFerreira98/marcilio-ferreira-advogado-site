import { Input } from "../Components/Input";

export function Contact(){
    return(
        <div className="h-[80vh] bg-white flex items-center justify-center">
            <div className="bg-marcilio-orange h-3/4 w-2/5 rounded-2xl flex flex-col gap-8 items-center justify-center">
            <div className="text-white font-semibold text-xl">Entre em contato conosco!</div>

            <Input name='nome' id='nome' placeholder="Nome" type='name'/>
            <Input name='email' id='email' placeholder='seuemail@seuemail.com.br' type='email' aria-label='Email'/>
            <Input name="telephone" id="telephone" placeholder="(81) 99999-9999" type='tel'/>

            <button className="w-3/5 h-10 rounded-xl mt-4 bg-white flex items-center justify-center text-marcilio-blue-700 font-semibold hover:bg-gray-100">Enviar</button>

            </div>
        </div>
    )
}