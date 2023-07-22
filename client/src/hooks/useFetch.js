import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, dependencyVariable, inputData) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios
        .get(url, { params: inputData })
        .then((res) => res.data);
      setData(response);
      setLoading(false);
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
