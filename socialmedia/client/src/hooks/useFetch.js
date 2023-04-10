import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  option = {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const fetchData = async (option) => {
    try {
      setLoading(true);
      const res = await fetch(url,option);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      fetchData()
  }, [url]);
  {
      return {
            data,
            loading,

      }
  }
};

export default useFetch;
