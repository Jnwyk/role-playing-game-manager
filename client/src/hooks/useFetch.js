import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, dependencyVariable, inputData) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const response = await axios
          .get(url, { params: inputData })
          .then((res) => res.data);
        setData(response);
        setLoading(false);
      }, 500);
      return clearTimeout();
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, dependencyVariable]);

  return [data, loading, error];
}
