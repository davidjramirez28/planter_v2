import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (method, url, body) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] = useState("");
  const endpoint = process.env.REACT_APP_API_ENDPOINT + url;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .request({
          method: method,
          url: endpoint,
          data: body,
        })
        .then((apiData) =>
          setApiData(apiData.data).catch((apiError) => setApiError(apiError))
        )
        .finally(() => setIsLoading(false));
      setIsLoading(false);
    };

    fetchData();
  }, [endpoint]);

  return { isLoading, apiData, apiError };
};

export default useFetch;
