import { Input } from "../Components/Input";

import React from "react";
import { X as Close } from 'phosphor-react'
 
export function Contact(){

    const [showModal, setShowModal] = React.useState(false);


    return(
        <div className="h-[80vh] bg-white flex items-center justify-center">
            <div className="bg-marcilio-orange h-3/4 w-2/5 rounded-2xl flex flex-col gap-8 items-center justify-center">
            <div className="text-white font-semibold text-xl">Entre em contato conosco!</div>

            <Input name='nome' id='nome' placeholder="Nome" type='name'/>
            <Input name='email' id='email' placeholder='seuemail@seuemail.com.br' type='email' aria-label='Email'/>
            <Input name="telephone" id="telephone" placeholder="(81) 99999-9999" type='tel'/>

            <button className="w-3/5 h-10 rounded-xl mt-4 bg-white flex items-center justify-center text-marcilio-blue-700 font-semibold hover:bg-gray-100"
                onClick={() => setShowModal(true)}>
                    Enviar
            </button>

        {showModal ? (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-marcilio-blue-500 text-3xl font-semibold">
                            Contato enviado com sucesso!
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <Close color="#425A7D"/>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        <p className="text-marcilio-blue-500 my-4 text-slate-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the main
                            thing people are controlled by! Thoughts- their perception
                            of themselves! They're slowed down by their perception of
                            themselves. If you're taught you can’t do anything, you
                            won’t do anything. I was taught I could do everything.
                        </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="bg-marcilio-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}

            </div>
        </div>
    )
}