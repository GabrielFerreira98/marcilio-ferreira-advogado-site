import axios from "axios";
import { useEffect, useState } from "react";
import lawBackground from '../assets/law-bg.jpg'


interface IFeedItem{
    id: string;
    media_type: "IMAGE" | "VIDEO";
    media_url: string;
    permalink: string;
    username: string;
    caption: string;
}

export function InstagramPosts(){
    const [postList, setPostList] = useState<IFeedItem[]>([])

    async function getInstagramPosts(){
        const token = import.meta.env.VITE_INSTA_TOKEN
        const fields = "media_url, media_type, permalink, username, caption"
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}` 

        const { data } = await axios.get(url)
        setPostList(data.data)
        console.log(data.data);
        
    }

    useEffect(() => {
        getInstagramPosts()
    }, [])

    return(
        <div className='h-[100vh] w-full flex flex-col items-center justify-center'>
            <div className="flex items-center justify-center gap-12">
                {postList.map(item => (
                    <a key={item.id} href={item.permalink} target="_blank"> 
                        {item.media_type === "IMAGE" ? <img className="h-[30vh] w-[15vw] rounded-lg hover:opacity-80" src={item.media_url}/> : (
                            <video className="h-[30vh] w-[30vw] rounded-lg hover:opacity-80">
                                <source src = {item.media_url}/>
                            </video>
                        )}
                    </a>
                    ))}
            </div>
        </div>
    )

}