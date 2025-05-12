import { useEffect } from "react";

export  default function ImageSlider ({url, limit}) {

    const [images, setImages] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    async function fetchImages(getUrl) {
        try{
            const response = await fetch(getUrl);
            const data = await response.json();

        } catch(e) {
            setErrorMsg(e.message);
        }
    }

    useEffect(() =>{
        if(url !== '') fetchImages(url)
    }, [url])

    return <div className="container"></div>
}