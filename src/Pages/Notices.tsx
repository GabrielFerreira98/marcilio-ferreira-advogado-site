import { NoticeContainer } from "../Components/NoticeContainer";

export function Notices(){
    return(
        <div className="h-screen bg-marcilio-blue-300 flex items-center justify-center gap-16">

            <NoticeContainer url="https://source.unsplash.com/random/900×700/?notices" title="Notícia 1: Verdadeiro ou falso?" subtitle="Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy."/>
            <NoticeContainer url="https://source.unsplash.com/random/900×700/?notices" title="Notícia 2: Falso ou verdadeiro?" subtitle="Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy."/>
            <NoticeContainer url="https://source.unsplash.com/random/900×700/?notices" title="Notícia 3: Verdadeiro ou falso?" subtitle="Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy. Lorem Ipsum is simply dummy."/>

        </div>
    )
    
}