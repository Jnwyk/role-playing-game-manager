import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url, method, body, redirectUrl) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(url).then((res) => setData(res.data));
      setLoading(false);
      setData(response.data);
      if (body) {
        window.location.href = redirectUrl;
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData(body);
  }, [url, method, body]);

  return [{ data, loading, error }, fetchData];
}
