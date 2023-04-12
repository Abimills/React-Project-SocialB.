import { useState ,useEffect} from "react";

const defaultOptions = {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
};

const useFetch = (url, option = defaultOptions) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
 
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(url, option);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  {
    return {
      data,
      loading,
      error,
    };
  }
};

export default useFetch;
