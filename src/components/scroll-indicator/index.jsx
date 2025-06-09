import { useEffect, useState } from "react";

export default function ScrollIndivator({url}) {

    const [data, setState] = useState([]);
    const [loading, setLoading] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json()

            console.log(data)

        } catch(e) {
            console.log(e);
            setErrorMessage(e.message)
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return <div>

    </div>
}