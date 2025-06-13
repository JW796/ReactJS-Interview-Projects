import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollRate, setScrollRate] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollRate() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.document.documentElement.scrollHeight,
      documentElement.clientHeight
    );

    const scrollPercantage = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollRate);
  });

  console.log(data, loading);

  return (
    <div>
      <h1>Custom Scroll Indicator</h1>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
